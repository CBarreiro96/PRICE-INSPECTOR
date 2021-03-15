#!/usr/bin/python3
from datetime import datetime
from graph import Graph

'''
Method with Ichimoku strategy
'''


def ichimoku(data, dict_paramater):
    # Variables declaration
    hight_column = 2
    low_column = 3
    close_column = 4
    tenkan_column = 7
    kijun_sen_column = 8
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
                data.loc[(i + tenkan_lookback), 'Tenkan'] = (data.iloc[i:(i + tenkan_lookback), hight_column].max() +
                                                             data.iloc[i:(i + tenkan_lookback), low_column].min()) / 2

            # Kijun-sen trend
            if (i + kijun_sen_lookback) <= len(data) - 1:
                data.loc[(i + kijun_sen_lookback), 'Kijun-sen'] = (data.iloc[i:(i + kijun_sen_lookback),
                                                                   hight_column].max() +
                                                                   data.iloc[i:(i + kijun_sen_lookback),
                                                                   low_column].min()) / 2
        except ValueError:
            pass

    for i in range(len(data)):
        try:

            # Chikou-span
            if i + chikou_span_lookback <= len(data) - 1:
                data.loc[i, 'Chikou-span'] = data.iloc[(i + chikou_span_lookback), close_column]

            # Senkou-span A
            if (i + (senkou_span_A_projection + kijun_sen_lookback)) <= len(data) - 1:
                data.loc[(i + (senkou_span_A_projection + kijun_sen_lookback)), 'Senkou-span A'] = \
                    (data.iloc[(i + kijun_sen_lookback), tenkan_column] +
                     data.iloc[(i + kijun_sen_lookback), kijun_sen_column]) / 2

            # Senkou-span B
            if (i + (senkou_span_B_lookback + senkou_span_B_projection)) <= len(data) - 1:
                data.loc[(i + (senkou_span_B_lookback + senkou_span_B_projection)), 'Senkou-span B'] = \
                    (data.iloc[i:(i + senkou_span_B_lookback), hight_column].max() +
                     data.iloc[i:(i + senkou_span_B_lookback), low_column].min()) / 2
        except ValueError:
            pass

    # buy and sell signals of the ichimoku model
    signal(data, chikou_span_lookback, close_column, tenkan_column, kijun_sen_column)

    return data


'''
It is a signal
'''


def signal(data, Chikou_span_Period, close_column, tenkan_column, kijun_sen_column):
    # Variables declaration
    senkou_span_A_column = 10
    senkou_span_B_column = 11
    chikou_span_column = 9

    for j in range(len(data.columns)):
        if data.columns[j] == 'Senkou-span B':
            for i in range(Chikou_span_Period, len(data)):
                # Buy signal on the model
                if (data.iloc[i, tenkan_column] > data.iloc[i, kijun_sen_column]) \
                        and (data.iloc[i - 1, tenkan_column] < data.iloc[i - 1, kijun_sen_column]) \
                        and (data.iloc[i, close_column] > data.iloc[i, senkou_span_A_column]) \
                        and (data.iloc[i, close_column] > data.iloc[i, senkou_span_B_column]) \
                        and data.iloc[i - Chikou_span_Period, chikou_span_column] > data.iloc[i - Chikou_span_Period, close_column]:
                    data.loc[i, 'Buy_Sell'] = 1

                # Sale signal on the model
                if (data.iloc[i, tenkan_column] < data.iloc[i, kijun_sen_column]) \
                        and (data.iloc[i - 1, tenkan_column] > data.iloc[i - 1, kijun_sen_column]) \
                        and (data.iloc[i, close_column] < data.iloc[i, senkou_span_A_column]) \
                        and (data.iloc[i, close_column] < data.iloc[i, senkou_span_B_column]) \
                        and data.iloc[i - Chikou_span_Period, chikou_span_column] < data.iloc[i - Chikou_span_Period, close_column]:
                    data.loc[i, 'Buy_Sell'] = -1
    return data
