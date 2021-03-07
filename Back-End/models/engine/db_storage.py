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

    def last_date(self):
        """Returns the last date of prices avilable"""
        last_date = self.__session.query(Price).order_by(desc('date')).first()
        return last_date.p_date

    def data_feed(self):
        """updates the prices for all companies"""
        from datetime import datetime, date, timedelta
        import pytz  # to work with the time zone of New York
        import yfinance as yf
        from numpy import isnan

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
                last_date = last_date + timedelta(days=1)
                history = last_date
                # print(company.name)
                # print(history)
            except Exception:
                history = origin_date

            # Data has one day delay and is just for working days,
            # data is not updated when yesterday == saturday:
            if history < today and day_week not in end_week:
                print(company.ticker, history, yesterday)

                # Useof yfinance library to import prices from YahooFinance
                data = yf.download(company.ticker, start=str(history),
                                   end=str(yesterday))
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

    def run_backtester(self, **kwargs):
        """executes the backtester module"""
        from datetime import datetime, date
        import pandas as pd
        from modules.backtester import backtester

        date_format = '%Y-%m-%d'
        initial_date = datetime.strptime(kwargs["initial_date"],
                                         date_format).date()
        final_date = datetime.strptime(kwargs["final_date"],
                                       date_format).date()

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

        # query the requested strategy
        strategy = self.__session.query(Strategy)
        strategy = strategy.filter(Strategy.id == kwargs["strategy_id"])
        strategy = strategy.first()

        # check advanced or default parameters for the requested strategy
        for attr, value in strategy.to_dict().items():
            if attr not in kwargs:
                kwargs[attr] = value

        # query the name of the requested strategy
        strategy = strategy.name

        return backtester(df, strategy, **kwargs)
