import yfinance as yf

aapl = yf.Ticker("AAPL")
Data = aapl.history(period="MAX")
Data.drop(['Dividends', 'Stock Splits'], axis=1, inplace=True)
