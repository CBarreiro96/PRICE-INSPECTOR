import yfinance as yf

aapl = yf.Ticker("MSFT")
Data = aapl.history(period="MAX")
Data.drop(['Dividends', 'Stock Splits'], axis=1, inplace=True)
