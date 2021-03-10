import yfinance as yf

aapl = yf.Ticker("AAPL")
data = aapl.history(period="8Y")
data.drop(['Stock Splits'], axis=1, inplace=True)
