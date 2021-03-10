from ichimoku import ichimoku
from graph import Graph
from datetime import datetime, date
import json

'''
It is a method backtester that refer to testing a predictive model(Strategies),
this method return financial operation such as winning operation, loss operation, effectivity,
rentability etc
'''


def backtester(data, values):

    # Assignment of variable
    balance = float(values['initial_balance'])
    historical_balance = [balance]
    process = 0
    operation = 0
    price_buy = 0
    loss_operation = 0
    profit_operation = 0
    drawdown_list = []
    n_action = 0
    dict_column = {'date': 0, 'open': 1, 'hight': 2, 'low': 3, 'close': 4, 'volumen': 5, 'tenkan': 7, 'Kijun-sen': 8,
                   'chikou-span': 9, 'senkou-span A': 10, 'senkou-span B': 11, 'buy_sell': 12}

    # Strategy selection
    if values['name'] == 'Ichimoku Kinko Hyo':
        ichimoku(data, values, dict_column)

    for i in range(len(data)):
        ciclo = 0
        # Buy operation
        if data.iloc[i, dict_column['buy_sell']] == 1 and data.iloc[i, dict_column['close']] < balance and ciclo == 0:
            # Number of action that the people buy
            n_action = round(balance / data.iloc[i, dict_column['close']])
            price_buy = round(n_action * data.iloc[i, dict_column['close']])
            balance = round(balance - (n_action * data.iloc[i, dict_column['close']]))
            process = data.iloc[i, dict_column['buy_sell']]
            operation += 1
            ciclo = 1
            data.loc[i, 'Buy'] = 1

        # Sale operation with  the signal of the strategy condition.
        if data.iloc[i, dict_column['buy_sell']] == -1 and process == 1 and ciclo == 0:
            balance = balance + (n_action * data.iloc[i, dict_column['close']])
            historical_balance.append(balance)
            if round(n_action * data.iloc[i, dict_column['close']]) > price_buy:
                profit_operation += 1
            else:
                loss_operation += 1
            n_action = 0
            process = 0
            data.loc[i, 'Sell'] = 1

        # Sale operation with stop loss condition
        if n_action != 0 and process == 1 and ciclo == 0 \
                and round(n_action * data.iloc[i, dict_column['close']]) <= (
                price_buy - (price_buy * (float(values['stop_loss']) / 100))):
            balance = round(balance + (n_action * data.iloc[i, dict_column['close']]))
            historical_balance.append(balance)
            if round(n_action * data.iloc[i, dict_column['close']]) > price_buy:
                profit_operation += 1
            else:
                loss_operation += 1
            n_action = 0
            process = 0
            ciclo = 1
            data.loc[i, 'Sell'] = 1

        # Sale when there are enough action pending to sell and it is the final data to show
        if i == (len(data) - 1) and n_action != 0:
            balance = round(balance + (n_action * data.iloc[i, dict_column['close']]))
            historical_balance.append(balance)
            if round(n_action * data.iloc[i, dict_column['close']]) > price_buy:
                profit_operation += 1
            else:
                loss_operation += 1
            n_action = 0
            process = 0
            ciclo = 1
            data.loc[i, 'Sell'] = 1

    # Drawdown calculation
    for i in range(1, len(historical_balance)):
        if historical_balance[i] > historical_balance[i - 1]:
            max = historical_balance[i]
        else:
            max = historical_balance[i - 1]
        drawdown_list.append((historical_balance[i]/max)-1)

    # Length between th final date with the initial date
    delta_date = values['final_date'] - values['initial_date']
    profit_or_loss = abs(balance - float(values['initial_balance']))

    # Backtest resume
    result = {'initial_balance': float(values['initial_balance']),
              'final_balance': balance,
              'n_operations': operation,
              'winning_operations': profit_operation,
              'loosing_operations': loss_operation,
              'profit_or_loss': balance - float(values['initial_balance']),
              'effectivity': (profit_operation / operation) ,
              'max_drawdown': min(drawdown_list)}

    # Rentability calculation

    result['rentability'] = ((balance/float(values['initial_balance'])) ** (365 / delta_date.days)) - 1

    data.index = data["Date"]
    json_graph = Graph(data, values)
    mix = []
    resume = json.dumps(result)
    mix.append(resume)
    mix.append(json_graph)
    return json.dumps(mix)
