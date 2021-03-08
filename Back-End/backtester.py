from Ichimoku import ichimoku
from Data_Yfinance import Data
from graph import Graph


def backtester(Data,Strategy, dict_parameter):
    if Strategy == 'ichimoku':
        ichimoku(Data, dict_parameter)
    Graph(Data)




if __name__ == "__main__":
    dict_parameter = {'tenkan_lookback': 9,
                     'kijun_sen_lookback': 26,
                     'chikou_span_lookback': 26,
                     'senkou_span_A_projection': 26,
                     'senkou_span_B_lookback': 52,
                     'senkou_span_B_projection': 26}

    Data = Data.reset_index()
    Strategy='ichimoku'
    backtester(Data, Strategy, dict_parameter)
