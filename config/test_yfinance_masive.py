import yfinance as yf
tickers = "MSFT"
data = yf.download(tickers, start="2021-03-01", end="2021-03-03",
                   group_by="ticker")

print(data)
