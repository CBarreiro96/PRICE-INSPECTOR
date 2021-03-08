from Ichimoku import ichimoku
from Data_Yfinance import Data
from graph import Graph


def backtester(Data, Strategy, dict_parameter):
    Balance = 200
    procces = 0
    operation = 0
    Stop_loss = 10 / 100
    price_buy = 0
    Loss_operation = 0
    Profit_OPeration = 0
    Number_Action = 0
    if Strategy == 'ichimoku':
        Data = ichimoku(Data, dict_parameter)
    for i in range(len(Data)):
        ciclo = 0
        if Data.iloc[i, 11] == 1 and Data.iloc[i, 4] < Balance and ciclo == 0:
            Number_Action = round(Balance / Data.iloc[i, 4])
            price_buy = round(Number_Action * Data.iloc[i, 4])
            print("Este es price_buy {}".format(price_buy))
            Balance = round(Balance - (Number_Action * Data.iloc[i, 4]))
            procces = Data.iloc[i, 11]
            print('Compro')
            operation += 1
            ciclo = 1
            Data.loc[i, 'Buy'] = 1
        if Data.iloc[i, 11] == -1 and procces == 1 and ciclo == 0 and round(Number_Action * Data.iloc[i, 4]) >= (
                price_buy - (price_buy * Stop_loss)):
            print(round(Number_Action * Data.iloc[i, 4]))
            Balance = Balance + (Number_Action * Data.iloc[i, 4])
            print('Vendo1')
            if round(Number_Action * Data.iloc[i, 4]) > price_buy:
                Profit_OPeration += 1
            else:
                Loss_operation += 1
            Number_Action = 0
            procces = 0
            Data.loc[i, 'Sell'] = 1
        if Number_Action != 0 and round(Number_Action * Data.iloc[i, 4]) != price_buy and round(
                Number_Action * Data.iloc[i, 4]) == (
                price_buy - (price_buy * Stop_loss)) and procces == 1 and ciclo == 0:
            print(round(Number_Action * Data.iloc[i, 4]))
            Balance = round(Balance + (Number_Action * Data.iloc[i, 4]))
            print('Vendo2')
            if round(Number_Action * Data.iloc[i, 4]) > price_buy:
                Profit_OPeration += 1
            else:
                Loss_operation += 1
            Number_Action = 0
            procces = 0
            ciclo = 1
            Data.loc[i, 'Sell'] = 1
        if i == (len(Data) - 1) and Number_Action != 0:
            Balance = round(Balance + (Number_Action * Data.iloc[i, 4]))
            print('Vendo2')
            if round(Number_Action * Data.iloc[i, 4]) > price_buy:
                Profit_OPeration += 1
            else:
                Loss_operation += 1
            Number_Action = 0
            procces = 0
            ciclo = 1
            Data.loc[i, 'Sell'] = 1
    Data.index = Data['Date']
    Graph(Data)


if __name__ == "__main__":
    dict_parameter = {'tenkan_lookback': 9,
                      'kijun_sen_lookback': 26,
                      'chikou_span_lookback': 26,
                      'senkou_span_A_projection': 26,
                      'senkou_span_B_lookback': 52,
                      'senkou_span_B_projection': 26}

    Data = Data.reset_index()
    Strategy = 'ichimoku'
    backtester(Data, Strategy, dict_parameter)
