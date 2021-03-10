from ichimoku import ichimoku
from Data_Yfinance import data
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
    balance = values['initial_balance']
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
                price_buy - (price_buy * (values['stop_loss'] / 100))):
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
    profit_or_loss = abs(balance - values['initial_balance'])

    # Backtest resume
    result = {'initial_balance': values['initial_balance'],
              'final_balance': balance,
              'n_operations': operation,
              'winning_operations': profit_operation,
              'loosing_operations': loss_operation,
              'profit_or_loss': balance - values['initial_balance'],
              'effectivity': (profit_operation / operation) ,
              'max_drawdown': min(drawdown_list)}

    # Rentability calculation
    if (balance - values['initial_balance']) >= 0:
        result['rentability'] = (((profit_or_loss / values['initial_balance'])+1) ** (365 / delta_date.days)) - 1
    else:
        result['rentability'] = -1 * (((profit_or_loss / values['initial_balance']) ** (365 / delta_date.days)) - 1)

    data.index = data['Date']
    json_graph = Graph(data, values)
    mix = []
    resume = json.dumps(result)
    mix.append(resume)
    mix.append(json_graph)
    print(json.dumps(mix))
    return json.dumps(mix)


if __name__ == "__main__":
    values = {'name': 'Ichimoku Kinko Hyo', 'param_0_name': 'tenkan_lookback', 'param_0_value': 9,
              'param_1_name': 'kijun_sen_lookback', 'param_1_value': 26, 'param_2_name': 'chikou_span_lookback',
              'param_2_value': 26, 'param_3_name': 'senkou_span_A_projection', 'param_3_value': 26,
              'param_4_name': 'senkou_span_B_lookback', 'param_4_value': 52, 'param_5_name': 'senkou_span_B_projection',
              'param_5_value': 26, 'initial_balance': 200, 'stop_loss': 10, 'initial_date': datetime(2015, 1, 1),
              'final_date': datetime(2021, 3, 10)}

    data = data.reset_index()
    backtester(data, values)
