from datetime import datetime, date
from bokeh.plotting import figure, output_file, show
from bokeh.embed import json_item
import json
from bokeh.models import HoverTool


def Graph(data, values):
    '''
    It is graph method, in this method all the trend lines are graphed with
    the buy and sell signals of the ichimoku strategy
    '''
    cloud = 0
    data.index = data["Date"]
    inc = data.Close > data.Open
    dec = data.Open > data.Close
    w = 12 * 60 * 60 * 1000  # half day in ms
    month_t = 4 * 7 * 24 * 60 * 60 * 1000  # month in ms (timestamp)

    # ===== Graphics parameters in bokeh
    tools = ("pan, box_zoom, wheel_zoom, crosshair, reset," +
             "xwheel_zoom, ywheel_zoom")
    tooltips = [('price', '$y')]  # this is for the Hover tool

    # ----- Building the x axis range (x is in timestamp):
    x_max = data["Date"][len(data)-1]  # select the most recent date
    x_max = datetime.strptime(x_max.strftime('%Y%m%d'),
                              '%Y%m%d').timestamp() * 1000  # timestamp
    ## adjusting the graphic 1.1 months to the left:
    x_max = x_max + (1.1 * month_t)

    x_min = data["Date"][len(data) - 90]  # select 3 months ago date
    x_min = datetime.strptime(x_min.strftime('%Y%m%d'),
                               '%Y%m%d').timestamp() * 1000 # timestamp
    x_min = x_min + (1.1 * month_t)
    # -----

    # ----- Building the y axis range:
    data_select = data[["High", "Low", "Tenkan", "Kijun-sen", "Chikou-span",
                        "Senkou-span A", "Senkou-span B"]].iloc[len(data) - 90:]
    y_max = data_select.max(numeric_only=True).max() * 1.005  # max + 0.5%
    y_min = data_select.min(numeric_only=True).min()
    # -----

    p = figure(x_axis_type="datetime", plot_width=800, plot_height=600,
               title="Ichimoku", tools=tools, x_range=(x_min, x_max),
               y_range=(y_min, y_max))
    p.add_tools(HoverTool(tooltips=tooltips))  # add hover tool
    p.xaxis.major_label_orientation = 0.1  # pi / 4
    p.grid.grid_line_alpha = 0.3
    # =====

    # candle diagram of closing prices
    p.segment(data.Date, data.High, data.Date, data.Low, color="black")
    p.vbar(data.Date[inc], w, data.Open[inc], data.Close[inc],
           fill_color="#1ab01f", line_color="black")
    p.vbar(data.Date[dec], w, data.Open[dec], data.Close[dec],
           fill_color="#F2583E", line_color="black")

    for i in range(len(data.columns)):
        # figure lines of the strategy parameters
        if data.columns[i] == 'Tenkan':
            p.line(data['Date'], data['Tenkan'],
                   legend_label="Tenkan", line_color="orange",
                   line_width=2)
        if data.columns[i] == 'Kijun-sen':
            p.line(data['Date'], data['Kijun-sen'],
                   legend_label="Kijun-sen", line_color="green",
                   line_width=2)
        if data.columns[i] == 'Chikou-span':
            p.line(data['Date'], data['Chikou-span'],
                   legend_label="Chikou-span", line_color="purple",
                   line_width=2)
        if data.columns[i] == 'Senkou-span A':
            p.line(data['Date'], data['Senkou-span A'],
                   legend_label="Senkou-span A", line_color="red",
                   line_dash="4 4", line_width=2)
            cloud += 1
        if data.columns[i] == 'Senkou-span B':
            p.line(data['Date'], data['Senkou-span B'],
                   legend_label="Senkou-span B", line_color="navy",
                   line_dash="4 4", line_width=2)
            cloud += 1

        # Area covered between the Senkou-span A and Senkou-span B function
        if cloud == 2:
            p.varea(data['Date'], data['Senkou-span A'], data['Senkou-span B'],
                    color='blue', fill_alpha=0.02)

        # Buy signal and sale signal in the chart
        if data.columns[i] == 'Buy':
            p.asterisk(x=data[(data['Buy'] == 1)]['Date'],
                       y=data[(data['Buy'] == 1)]['High'] * 1.005,
                       size=5, color="green", line_width=4)
        if data.columns[i] == 'Sell':
            p.asterisk(x=data[(data['Sell'] == 1)]['Date'],
                       y=data[(data['Sell'] == 1)]['High'] * 1.005,
                       size=5, color="red", line_width=4)
    # output_file('./config/graph2.html')
    # show(p)
    return json_item(p, "myplot")
