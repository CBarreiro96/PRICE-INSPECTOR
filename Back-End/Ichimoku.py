#!/usr/bin/python3
from Data_Yfinance import Data
from datetime import datetime
from graph import Graph

'''
Method with Ichimoku strategy
'''


def ichimoku(Data, dict_paramater):
    for i in range(len(Data)):
        try:
            # Tenkan trend
            if (i + dict_paramater['tenkan_lookback']) <= len(Data) - 1:
                Data.loc[(i + dict_paramater['tenkan_lookback']), 'Tenkan'] = (Data.iloc[i:(
                            i + dict_paramater['tenkan_lookback']), 2].max() + Data.iloc[i:(
                        i + dict_paramater['tenkan_lookback']), 3].min()) / 2
            # Kijun-sen trend
            if (i + dict_paramater['kijun_sen_lookback']) <= len(Data) - 1:
                Data.loc[(i + dict_paramater['kijun_sen_lookback']), 'Kijun-sen'] = (Data.iloc[i:(
                            i + dict_paramater['kijun_sen_lookback']),
                                                                                     2].max() + Data.iloc[i:(
                            i + dict_paramater['kijun_sen_lookback']),
                                                                                                3].min()) / 2
        except ValueError:
            pass

    for i in range(len(Data)):
        try:
            # Chikou-span
            if i + dict_paramater['chikou_span_lookback'] <= len(Data) - 1:
                Data.loc[i, 'Chikou-span'] = Data.iloc[(i + dict_paramater['chikou_span_lookback']), 4]
            # Senkou-span A
            if (i + (dict_paramater['senkou_span_A_projection'] + dict_paramater['kijun_sen_lookback'])) <= len(
                    Data) - 1:
                Data.loc[(i + (dict_paramater['senkou_span_A_projection'] + dict_paramater[
                    'kijun_sen_lookback'])), 'Senkou-span A'] = (Data.iloc[(
                                                                                   i + dict_paramater[
                                                                               'kijun_sen_lookback']), 6] +
                                                                 Data.iloc[(
                                                                                   i + dict_paramater[
                                                                               'kijun_sen_lookback']), 7]) / 2
            # Senkou-span B
            if (i + (dict_paramater['senkou_span_B_lookback'] + dict_paramater['senkou_span_B_projection'])) <= len(
                    Data) - 1:
                Data.loc[(i + (dict_paramater['senkou_span_B_lookback'] + dict_paramater[
                    'senkou_span_B_projection'])), 'Senkou-span B'] = (Data.iloc[i:(
                        i + dict_paramater['senkou_span_B_lookback']), 2].max() + Data.iloc[i:(
                            i + dict_paramater['senkou_span_B_lookback']),
                                                                                  3].min()) / 2
        except ValueError:
            pass
    signal(Data, dict_paramater['chikou_span_lookback'])
    return Data


def signal(Data, Chikou_span_Period):
    for i in range(Chikou_span_Period, len(Data)):
        if (Data.iloc[i, 6] > Data.iloc[i, 7]) and (Data.iloc[i - 1, 6] < Data.iloc[i - 1, 7]) and (
                Data.iloc[i, 4] > Data.iloc[i, 9]) and (Data.iloc[i, 4] > Data.iloc[i, 10]) and Data.iloc[i - 26, 8] > \
                Data.iloc[i - 26, 4]:
            Data.loc[i, 'Buy_Sell'] = 1
        if (Data.iloc[i, 6] < Data.iloc[i, 7]) and (Data.iloc[i - 1, 6] > Data.iloc[i - 1, 7]) and (
                Data.iloc[i, 4] < Data.iloc[i, 9]) and (Data.iloc[i, 4] < Data.iloc[i, 10]) and Data.iloc[i - 26, 8] < \
                Data.iloc[i - 26, 4]:
            Data.loc[i, 'Buy_Sell'] = -1
    return Data
