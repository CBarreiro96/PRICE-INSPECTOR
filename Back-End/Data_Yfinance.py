import yfinance as yf

aapl = yf.Ticker("MSFT")
Data = aapl.history(period="8Y")
Data.drop(['Dividends', 'Stock Splits'], axis=1, inplace=True)
