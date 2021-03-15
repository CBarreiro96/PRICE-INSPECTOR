#!/usr/bin/python3
from datetime import datetime
from graph import Graph

'''
Method with Ichimoku strategy
'''


def ichimoku(data, dict_paramater, dict_column):
    # Variable declaration
    tenkan_lookback = int(dict_paramater['param_0_value'])
    kijun_sen_lookback = int(dict_paramater['param_1_value'])
    chikou_span_lookback = int(dict_paramater['param_2_value'])
    senkou_span_A_projection = int(dict_paramater['param_3_value'])
    senkou_span_B_lookback = int(dict_paramater['param_4_value'])
    senkou_span_B_projection = int(dict_paramater['param_5_value'])

    for i in range(len(data)):
        try:
            # Tenkan trend
            if (i + tenkan_lookback) <= len(data) - 1:
                data.loc[(i + tenkan_lookback), 'Tenkan'] = (data.iloc[i:(i + tenkan_lookback), dict_column['hight']].max() +
                                                             data.iloc[i:(i + tenkan_lookback), dict_column['low']].min()) / 2

            # Kijun-sen trend
            if (i + kijun_sen_lookback) <= len(data) - 1:
                data.loc[(i + kijun_sen_lookback), 'Kijun-sen'] = (data.iloc[i:(i + kijun_sen_lookback), dict_column['hight']].max() +
                                                                   data.iloc[i:(i + kijun_sen_lookback), dict_column['low']].min()) / 2
        except ValueError:
            pass

    for i in range(len(data)):
        try:

            # Chikou-span
            if i + chikou_span_lookback <= len(data) - 1:
                data.loc[i, 'Chikou-span'] = data.iloc[(i + chikou_span_lookback), dict_column['close']]

            # Senkou-span A
            if (i + (senkou_span_A_projection + kijun_sen_lookback)) <= len(data) - 1:
                data.loc[(i + (senkou_span_A_projection + kijun_sen_lookback)), 'Senkou-span A'] = \
                    (data.iloc[(i + kijun_sen_lookback), dict_column['tenkan']] +
                     data.iloc[(i + int(dict_paramater['param_1_value'])), dict_column['Kijun-sen']]) / 2

            # Senkou-span B
            if (i + (senkou_span_B_lookback + senkou_span_B_projection)) <= len(data) - 1:
                data.loc[(i + (senkou_span_B_lookback + senkou_span_B_projection)), 'Senkou-span B'] = \
                    (data.iloc[i:(i + senkou_span_B_lookback), dict_column['hight']].max() +
                     data.iloc[i:(i + senkou_span_B_lookback), dict_column['low']].min()) / 2
        except ValueError:
            pass

    # buy and sell signals of the ichimoku model
    signal(data, chikou_span_lookback, dict_column)

    return data


'''
It is a signal
'''


def signal(data, Chikou_span_Period, dict_column):
    for i in range(Chikou_span_Period, len(data)):

        # Buy signal on the model
        if (data.iloc[i, dict_column['tenkan']] > data.iloc[i, dict_column['Kijun-sen']]) \
                and (data.iloc[i - 1, dict_column['tenkan']] < data.iloc[i - 1, dict_column['Kijun-sen']]) \
                and (data.iloc[i, dict_column['close']] > data.iloc[i, dict_column['senkou-span A']]) \
                and (data.iloc[i, dict_column['close']] > data.iloc[i, dict_column['senkou-span B']]) \
                and data.iloc[i - Chikou_span_Period, dict_column['chikou-span']] > data.iloc[i - Chikou_span_Period,
                                                                                              dict_column['close']]:
            data.loc[i, 'Buy_Sell'] = 1

        # Sale signal on the model
        if (data.iloc[i, dict_column['tenkan']] < data.iloc[i, dict_column['Kijun-sen']]) \
                and (data.iloc[i - 1, dict_column['tenkan']] > data.iloc[i - 1, dict_column['Kijun-sen']]) \
                and (data.iloc[i, dict_column['close']] < data.iloc[i, dict_column['senkou-span A']]) \
                and (data.iloc[i, dict_column['close']] < data.iloc[i, dict_column['senkou-span B']]) \
                and data.iloc[i - Chikou_span_Period, dict_column['chikou-span']] < data.iloc[i - Chikou_span_Period,
                                                                                              dict_column['close']]:
            data.loc[i, 'Buy_Sell'] = -1
    return data
