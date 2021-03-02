from datetime import datetime
from bokeh.plotting import figure, output_file, show


def Graph(Data):
    output_file('graph.html')
    Data.index = Data['Date']
    p = figure(title="Ichimoku", x_axis_type="datetime", x_axis_label='Date', y_axis_label='Price')
    p.line(Data.loc[datetime(2019, 3, 1):datetime.now(), 'Date'],
           Data.loc[datetime(2019, 3, 1):datetime.now(), 'Price'], legend_label="Price.", line_color="blue",
           line_width=2)
    p.line(Data.loc[datetime(2019, 3, 1):datetime.now(), 'Date'],
           Data.loc[datetime(2019, 3, 1):datetime.now(), 'Tenkan'], legend_label="Tenkan", line_color="red", line_width=2)
    p.line(Data.loc[datetime(2019, 3, 1):datetime.now(), 'Date'],
           Data.loc[datetime(2019, 3, 1):datetime.now(), 'Kijun-sen'], legend_label="Kijun-sen", line_color="green",
           line_width=2)
    show(p)
