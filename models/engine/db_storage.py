#!/usr/bin/python3
"""class DBStorage"""

import models
from models.base_model import BaseModel, Base
from models.user import User
from models.company import Company
from models.price import Price
from models.strategy import Strategy
from models.backtest import Backtest
from os import getenv
import sqlalchemy
from sqlalchemy import create_engine, desc
from sqlalchemy.orm import scoped_session, sessionmaker


classes = {"User": User, "Company": Company, "Strategy": Strategy,
           "Backtest": Backtest, "Price": Price}


class DBStorage:
    """interacts with the MySQL database"""
    __engine = None
    __session = None
    last_dates = None  # stores the last two prices dates
    ranking = []  # stores the most recent company ranking

    def __init__(self):
        """Instantiate a DBStorage object"""
        PI_MYSQL_USER = getenv('PI_MYSQL_USER')
        PI_MYSQL_PWD = getenv('PI_MYSQL_PWD')
        PI_MYSQL_HOST = getenv('PI_MYSQL_HOST')
        PI_MYSQL_DB = getenv('PI_MYSQL_DB')
        self.__engine = create_engine('mysql+mysqldb://{}:{}@{}/{}'.
                                      format(PI_MYSQL_USER,
                                             PI_MYSQL_PWD,
                                             PI_MYSQL_HOST,
                                             PI_MYSQL_DB))

    def all(self, cls=None):
        """query on the current database session"""
        new_dict = {}
        for clss in classes:
            if cls is None or cls is classes[clss] or cls is clss:
                objs = self.__session.query(classes[clss]).all()
                for obj in objs:
                    key = obj.__class__.__name__ + '.' + obj.id
                    new_dict[key] = obj
        return (new_dict)

    def new(self, obj):
        """add the object to the current database session"""
        self.__session.add(obj)

    def save(self):
        """commit all changes of the current database session"""
        self.__session.commit()

    def delete(self, obj=None):
        """delete from the current database session obj if not None"""
        if obj is not None:
            self.__session.delete(obj)

    def reload(self):
        """reloads data from the database"""
        Base.metadata.create_all(self.__engine)
        sess_factory = sessionmaker(bind=self.__engine, expire_on_commit=False)
        Session = scoped_session(sess_factory)
        self.__session = Session
        try:
            self.last_dates = self.last_two_dates()
            self.ranking = self.company_ranking()
        except Exception:
            pass

    def close(self):
        """call remove() method on the private session attribute"""
        self.__session.remove()

    def get(self, cls, id):
        """
        Returns the object based on the class name and its ID, or
        None if not found
        """
        if cls not in classes.values():
            return None

        all_cls = models.storage.all(cls)
        for value in all_cls.values():
            if (value.id == id):
                return value

        return None

    def count(self, cls=None):
        """count the number of objects in storage"""
        all_class = classes.values()

        if not cls:
            count = 0
            for clas in all_class:
                count += len(models.storage.all(clas).values())
        else:
            count = len(models.storage.all(cls).values())

        return count

    def data_feed(self):
        """updates the prices for all companies"""
        import time
        from datetime import datetime, date, timedelta
        import pytz  # to work with the time zone of New York
        import yfinance as yf
        from numpy import isnan

        start_time = time.time()

        end_week = [5]  # 5 for saturday, 6 for sunday
        origin_date = date(2015, 1, 1)  # first date in history for this app
        today = datetime.now(pytz.timezone('US/Eastern')).date()
        yesterday = today - timedelta(days=1)
        day_week = yesterday.weekday()  # checks for the day of the week

        companies = self.all(Company).values()
        # companies = []
        # companies.append(self.get(Company,
        #                          "00890dc9-5876-4c24-851c-1888e5310c41"))
        count = 0
        n_comp = len(companies)
        for company in companies:
            count += 1
            print("{}/{} companies, progress: {}%".format(count,
                                                          n_comp,
                                                          (count/n_comp)*100))
            try:
                last_date = self.__session.query(Price)
                last_date = last_date.filter_by(company_id=company.id)
                last_date = last_date.order_by(desc('date')).first().p_date
                history = last_date
                # print(company.name)
                # print(history)
            except Exception:
                history = origin_date

            # Data has one day delay and is just for working days,
            # data is not updated when yesterday == saturday:
            if history < yesterday and day_week not in end_week:
                print(company.ticker, history, yesterday)

                # Useof yfinance library to import prices from YahooFinance
                data = yf.download(company.ticker, start=str(history),
                                   end=str(today))
                # data = yf.Ticker(company.ticker).history(start=history,
                #                                         end=today)

                # read the DataFrame comming from yfinance to store in the DB
                for i in range(len(data)):
                    price_dict = {}
                    date = data.index[i]
                    if date <= history:  # dates can not be repeated
                        continue
                    # print(data.loc[date])
                    price_dict["p_date"] = date
                    price_dict["p_open"] = data.loc[date, "Open"]
                    price_dict["p_close"] = data.loc[date, "Close"]
                    price_dict["p_high"] = data.loc[date, "High"]
                    price_dict["p_low"] = data.loc[date, "Low"]
                    price_dict["volume"] = data.loc[date, "Volume"]
                    price_dict["p_adj_close"] = data.loc[date, "Adj Close"]

                    # check if any Nan in price_dict
                    is_null = 0
                    for key in price_dict.keys():
                        if key is not "p_date":
                            if isnan(price_dict[key]):
                                is_null = 1
                                break
                    # if any Nan in price_dict obj Price not created
                    if not is_null:
                        try:
                            instance = Price(**price_dict)
                            instance.company_id = company.id
                            self.__session.add(instance)
                        except Exception:
                            pass
            self.__session.commit()
        self.last_dates = self.last_two_dates()
        self.ranking = self.company_ranking()
        print("--- updated in %s minutes ---"
              % round((time.time() - start_time) / 60))

    def prepare_data(self, **kwargs):
        """prepares the data to run the backtester or a strategy"""
        from datetime import datetime, date
        import pandas as pd

        date_format = '%Y-%m-%d'
        initial_date = datetime.strptime(kwargs["initial_date"],
                                         date_format).date()
        final_date = datetime.strptime(kwargs["final_date"],
                                       date_format).date()

        kwargs["initial_date"] = initial_date
        kwargs["final_date"] = final_date

        # query the DB to extract the specific prices
        prices = self.__session.query(Price)
        prices = prices.filter(Price.company_id == kwargs["company_id"])
        prices = prices.filter(Price.p_date >= initial_date)
        prices = prices.filter(Price.p_date <= final_date)
        prices = prices.all()

        # build the DataFrame with the specific prices
        fields = ['p_date', 'p_open', 'p_high', 'p_low', 'p_close', 'volume',
                  'p_adj_close']
        df = pd.DataFrame([{f:
                            getattr(p, f) for f in fields} for p in prices])
        df.columns = ['Date', 'Open', 'High', 'Low',
                      'Close', 'Volume', 'Adj_Close']

        df.sort_values('Date', ascending=True, inplace=True)

        # query the requested strategy
        strategy = self.__session.query(Strategy)
        strategy = strategy.filter(Strategy.id == kwargs["strategy_id"])
        strategy = strategy.first()

        # check advanced or default parameters for the requested strategy
        for attr, value in strategy.to_dict().items():
            if attr not in kwargs:
                kwargs[attr] = value

        # query the name of the requested strategy
        # strategy = strategy.name

        return [df, kwargs]

    def run_backtester(self, **kwargs):
        """executes the backtester module"""
        from backtester import backtester

        data = self.prepare_data(**kwargs)
        df = data[0]
        kwargs = data[1]
        return backtester(df, kwargs)

    def last_two_dates(self):
        """retrives the most recent two dates from the DB prices table"""
        from datetime import timedelta

        # query the DB to extract all prices
        prices_base = self.__session.query(Price)
        first_price = prices_base.order_by(desc('date')).first()

        current_date = first_price.p_date

        f_company_id = first_price.company_id
        prices_company = prices_base.filter_by(company_id=f_company_id)
        before_date = current_date - timedelta(days=10)
        before_date = prices_company.filter(Price.p_date >= before_date)
        before_date = before_date.filter(Price.p_date < current_date)
        before_date = before_date.order_by(desc('date')).first().p_date

        return {"before_date": before_date, "current_date": current_date}

    def company_ranking(self):
        """retrives the current 5 companies whose price increase and decrease
        the most comparing its last two prices"""
        import pandas as pd

        # query the DB to extract all prices
        prices_base = self.__session.query(Price)

        before_date = self.last_dates["before_date"]
        current_date = self.last_dates["current_date"]

        # filtering the query to extract the prices for date T-1
        prices = prices_base.filter(Price.p_date == before_date)
        prices = prices.all()

        # build the DataFrame with the specific prices
        fields = ['company_id','p_date', 'p_close']
        df_before = pd.DataFrame([{f:getattr(p, f) for f in fields}
                                  for p in prices])
        df_before.columns = ['company_id', 'date_before', 'close_before']

        # filtering the query to extract the prices for date T-0
        prices = prices_base.filter(Price.p_date == current_date)
        prices = prices.all()

        # build the DataFrame with the specific prices
        df_current = pd.DataFrame([{f: getattr(p, f) for f in fields}
                                   for p in prices])
        df_current.columns = ['company_id', 'date_current', 'close_current']

        df_final = pd.merge(df_before, df_current, on='company_id')
        df_final['var'] = (df_final.close_current / df_final.close_before) -1
        df_final.sort_values('var', ascending=False, inplace=True)

        df_best = df_final.head(5).copy()
        df_worst = df_final.tail(5).copy()

        best = {}
        for i in range(len(df_best)):
            best["name"] = self.get(Company, df_best.iloc[i, 0]).name
            best["value"] = df_best.iloc[i, 5]
        worst = {}
        for i in range(len(df_worst)):
            worst["name"] = self.get(Company, df_worst.iloc[i, 0]).name
            worst["value"] = df_worst.iloc[i, 5]

        return [best, worst]

    def recomendations(self, strategy_id, companies_ids):
        """retrives a dictionary with the last price and trading
        signal for each company_id received and given strategy"""
        from datetime import timedelta
        from ichimoku import ichimoku
        from numpy import isnan

        # to be able to work with ichimoku strategy:
        dict_column = {'date': 0, 'open': 1, 'hight': 2, 'low': 3,
                       'close': 4, 'volumen': 5, 'tenkan': 7,
                       'Kijun-sen': 8, 'chikou-span': 9,
                       'senkou-span A': 10, 'senkou-span B': 11,
                       'buy_sell': 12}
        kwargs = {}

        current_date = self.last_dates["current_date"]
        kwargs['initial_date'] = str(current_date - timedelta(days=365))
        kwargs['final_date'] = str(current_date)
        kwargs['strategy_id'] = strategy_id

        recom_dict = {}

        for company_id in companies_ids:
            company_dict = {}
            instance = self.get(Company, company_id)
            company_dict['ticker'] = instance.ticker
            kwargs['company_id'] = company_id
            data = self.prepare_data(**kwargs)
            df = data[0]
            values = data[1]

            # Strategy selection
            if values['name'] == 'Ichimoku Kinko Hyo':
                ichimoku(df, values)

            # reading the last trading signal:
            # 1 for Buy, -1 for Sell and 0 for Hold
            try:
                # signal = df.iloc[len(df) - 1, dict_column['buy_sell']]
                # mock signal:
                signal = df['Buy_Sell'].copy().sort_values().iloc[0]
            except Exception:
                signal = 0
            if isnan(signal):
                signal = 0

            company_dict['price'] = df['Close'].iloc[-1]
            company_dict['signal'] = signal
            recom_dict[company_id] = company_dict

        return recom_dict
