#!/usr/bin/python3
from Data_Yfinance import Data
from datetime import datetime
from graph import Graph


def ichimoku(Data):
    Index = Data.loc[datetime(2019, 3, 1), 'index']
    Lenght = len(Data.loc[datetime(2019, 3, 1):datetime.now(), 'High'])
    Data.index = Data['index']
    Data.drop(['index'], axis=1, inplace=True)
    # Tenkan
    j = 0
    for i in range(Lenght):
        Data.loc[Index + j, 'Tenkan'] = (Data.iloc[(Index - 9) + j:Index + j, 2].max() + Data.iloc[
                                                                                         (Index - 9) + j:Index + j,
                                                                                         3].min()) / 2
        j += 1
    # Kijun-sen
    j = 0
    for i in range(Lenght):
        Data.loc[Index + j, 'Kijun-sen'] = (Data.iloc[(Index - 26) + j:Index + j, 2].max() + Data.iloc[
                                                                                             (Index - 26) + j:Index + j,
                                                                                             3].min()) / 2
        j += 1
    Data.rename(columns={'Close': 'Price'}, inplace=True)
    Graph(Data)


if __name__ == "__main__":
    Data = Data.reset_index().reset_index()
    Data.index = Data['Date']
    ichimoku(Data)
