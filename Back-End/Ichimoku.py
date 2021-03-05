#!/usr/bin/python3
from Data_Yfinance import Data
from datetime import datetime
from graph import Graph


def ichimoku(Data, Tenkan_Period, Kijun_sen_Period, Chikou_span_Period,  Senkou_span_A_Period, Senkou_span_B_Period, Shift_Senkou_span_B):
    for i in range(len(Data)):
        try:
            # Tenkan trend
            if (i + Tenkan_Period) <= len(Data) - 1:
                Data.loc[(i + Tenkan_Period), 'Tenkan'] = (Data.iloc[i:(i + Tenkan_Period), 2].max() + Data.iloc[i:(i + Tenkan_Period), 3].min()) / 2
            # Kijun-sen trend
            if (i + Kijun_sen_Period) <= len(Data) - 1:
                Data.loc[(i + Kijun_sen_Period), 'Kijun-sen'] = (Data.iloc[i:(i + Kijun_sen_Period), 2].max() + Data.iloc[i:(i + Kijun_sen_Period), 3].min()) / 2
        except ValueError:
            pass

    for i in range(len(Data)):
        try:
            # Chikou-span
            if i + Chikou_span_Period <= len(Data) - 1:
                Data.loc[i, 'Chikou-span'] = Data.iloc[(i + Chikou_span_Period), 4]
            # Senkou-span A
            if (i + (Senkou_span_A_Period+Kijun_sen_Period)) <= len(Data) - 1:
                Data.loc[(i + (Senkou_span_A_Period+Kijun_sen_Period)), 'Senkou-span A'] = (Data.iloc[(i + Kijun_sen_Period), 6] + Data.iloc[(i + Kijun_sen_Period), 7]) / 2
            # Senkou-span B
            if (i + (Senkou_span_B_Period+Shift_Senkou_span_B)) <= len(Data) - 1:
                Data.loc[(i + (Senkou_span_B_Period+Shift_Senkou_span_B)), 'Senkou-span B'] = (Data.iloc[i:(i + Senkou_span_B_Period), 2].max() + Data.iloc[i:(i + Senkou_span_B_Period),
                                                                                        3].min()) / 2
        except ValueError:
            pass
    signal(Data, Chikou_span_Period)
    Data.index = Data['Date']
    Graph(Data)


def signal(Data, Chikou_span_Period):
    for i in range(Chikou_span_Period, len(Data)):
        if (Data.iloc[i, 6] > Data.iloc[i, 7]) and (Data.iloc[i - 1, 6] < Data.iloc[i - 1, 7]) and (
                Data.iloc[i, 4] > Data.iloc[i, 9]) and (Data.iloc[i, 4] > Data.iloc[i, 10]) and Data.iloc[i - Chikou_span_Period, 8] > \
                Data.iloc[i - Chikou_span_Period, 4]:
            Data.loc[i, 'Buy'] = 1
        if (Data.iloc[i, 6] < Data.iloc[i, 7]) and (Data.iloc[i - 1, 6] > Data.iloc[i - 1, 7]) and (
                Data.iloc[i, 4] < Data.iloc[i, 9]) and (Data.iloc[i, 4] < Data.iloc[i, 10]) and Data.iloc[i - Chikou_span_Period, 8] < \
                Data.iloc[i - Chikou_span_Period, 4]:
            Data.loc[i, 'Sell'] = 1
    return Data


if __name__ == "__main__":
    Tenkan_Period = 9
    Kijun_sen_Period = 26
    Chikou_span_Period = 26
    Senkou_span_A_Period = 26
    Senkou_span_B_Period = 52
    Shift_Senkou_span_B = 26

    Data = Data.reset_index()
    Data.rename(columns={'Close': 'Price'}, inplace=True)
    ichimoku(Data, Tenkan_Period, Kijun_sen_Period, Chikou_span_Period,  Senkou_span_A_Period, Senkou_span_B_Period, Shift_Senkou_span_B)
