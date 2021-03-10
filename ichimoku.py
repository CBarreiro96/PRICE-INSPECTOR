#!/usr/bin/python3
from Data_Yfinance import data
from datetime import datetime
from graph import Graph

'''
Method with Ichimoku strategy
'''


def ichimoku(data, dict_paramater, dict_column):
    for i in range(len(data)):
        try:

            # Tenkan trend
            if (i + dict_paramater['param_0_value']) <= len(data) - 1:
                data.loc[(i + dict_paramater['param_0_value']), 'Tenkan'] = \
                    (data.iloc[i:(i + dict_paramater['param_0_value']), dict_column['hight']].max() +
                     data.iloc[i:(i + dict_paramater['param_0_value']), dict_column['low']].min()) / 2

            # Kijun-sen trend
            if (i + dict_paramater['param_1_value']) <= len(data) - 1:
                data.loc[(i + dict_paramater['param_1_value']), 'Kijun-sen'] = \
                    (data.iloc[i:(i + dict_paramater['param_1_value']), dict_column['hight']].max() +
                     data.iloc[i:(i + dict_paramater['param_1_value']), dict_column['low']].min()) / 2
        except ValueError:
            pass

    for i in range(len(data)):
        try:

            # Chikou-span
            if i + dict_paramater['param_2_value'] <= len(data) - 1:
                data.loc[i, 'Chikou-span'] = data.iloc[(i + dict_paramater['param_2_value']),
                                                       dict_column['close']]
            # Senkou-span A
            if (i + (dict_paramater['param_3_value'] + dict_paramater['param_1_value'])) <= len(
                    data) - 1:
                data.loc[(i + (dict_paramater['param_3_value'] + dict_paramater['param_1_value'])),
                         'Senkou-span A'] = (data.iloc[(i + dict_paramater['param_1_value']),
                                                       dict_column['tenkan']] +
                                             data.iloc[(i + dict_paramater['param_1_value']),
                                                       dict_column['Kijun-sen']]) / 2

            # Senkou-span B
            if (i + (dict_paramater['param_4_value'] + dict_paramater['param_5_value'])) <= len(
                    data) - 1:
                data.loc[(i + (dict_paramater['param_4_value'] +
                               dict_paramater['param_5_value'])),
                         'Senkou-span B'] = (data.iloc[i:(i + dict_paramater['param_4_value']),
                                             dict_column['hight']].max() +
                                             data.iloc[i:(i + dict_paramater['param_4_value']),
                                             dict_column['low']].min()) / 2
        except ValueError:
            pass

    # buy and sell signals of the ichimoku model
    signal(data, dict_paramater['param_2_value'], dict_column)

    return data


'''
It is a signal 
'''


def signal(data, Chikou_span_Period, dict_column):
    for i in range(Chikou_span_Period, len(data)):

        # buy signal on the model
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
