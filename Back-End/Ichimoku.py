#!/usr/bin/python3
import yfinance as yf
import pandas as pd
from bokeh.plotting import figure, output_file, show


def Ticker_user(Ticker, Periode):
    aapl = yf.Ticker(Ticker)
    hist = aapl.history(period=Periode)
    hist.drop(['Dividends', 'Stock Splits'], axis=1, inplace=True)
    return hist


def Ticker_Max(Ticker):
    aapl = yf.Ticker(Ticker)
    hist = aapl.history(period="MAX")
    hist.drop(['Dividends', 'Stock Splits'], axis=1, inplace=True)
    return hist


def Tenkan(hist2, a, hist):
    j = 0
    for i in range(len(hist)):
        a.append((hist2.iloc[(count - 9) + j:count + j, 2].max() + hist2.iloc[(count - 9) + j:count + j, 3].min()) / 2)
        j += 1
    return a


def Kijun_sen(hist2, hist):
    j = 0
    a = []
    for i in range(len(hist)):
        a.append(
            (hist2.iloc[(count - 26) + j:count + j, 2].max() + hist2.iloc[(count - 25) + j:count + j, 3].min()) / 2)
        j += 1
    return a


if __name__ == "__main__":
    Ticker = "AAPL"
    Periode = "1Y"
    Hist = Ticker_user(Ticker, Periode)
    Hist2 = Ticker_Max(Ticker)
    Index = Hist.iloc[0, 1]
    count = 0
    for i in range(len(Hist2)):
        if Index == Hist2['High'].values[i]:
            break
        count += 1
    a = []
    Data = pd.DataFrame(Hist2.iloc[count:len(Hist2), 3].copy(deep=True))
    Data['Tenkan'] = Tenkan(Hist2, a, Hist)
    Data['Kijun-sen'] = Kijun_sen(Hist2, Hist)
    Data.rename(columns={'Close': 'Price'}, inplace=True)
    Data.reset_index(inplace=True)
    output_file('graficado.html')
    p = figure(title="Ichimoku", x_axis_label='Date', y_axis_label='Price')
    p.line(Data['Date'], Data['Price'], legend_label="Temp.", line_color="blue", line_width=2)
    p.line(Data['Date'], Data['Tenkan'], legend_label="Rate", line_color="red", line_width=2)
    p.line(Data['Date'], Data['Kijun-sen'], legend_label="Objects", line_color="green", line_width=2)
    show(p)
