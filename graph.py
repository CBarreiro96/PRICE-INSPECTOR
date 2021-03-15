from datetime import datetime, date
from bokeh.plotting import figure, output_file, show
from bokeh.embed import json_item
import json
from math import pi

'''
It is graph method, in this method all the trend lines are graphed with 
the buy and sell signals of the ichimoku strategy
'''


def Graph(data, values):
    cloud = 0
    data.index = data["Date"]
    inc = data.Close > data.Open
    dec = data.Open > data.Close
    w = 12 * 60 * 60 * 1000  # half day in ms

    # Graphics parameters in bokeh
    p = figure(x_axis_type="datetime", plot_width=800, plot_height=600, title="Ichimoku")
    p.xaxis.major_label_orientation = pi / 4
    p.grid.grid_line_alpha = 0.3

    # candle diagram of closing prices
    p.segment(data.Date, data.High, data.Date, data.Low, color="black")
    p.vbar(data.Date[inc], w, data.Open[inc], data.Close[inc], fill_color="#D5E1DD", line_color="black")
    p.vbar(data.Date[dec], w, data.Open[dec], data.Close[dec], fill_color="#F2583E", line_color="black")

    for i in range(len(data.columns)):
        # figure lines of the strategy parameters
        if data.columns[i] == 'Tenkan':
            p.line(data.loc[values['initial_date']:values['final_date'], 'Date'],
                   data.loc[values['initial_date']:values['final_date'], 'Tenkan'], legend_label="Tenkan",
                   line_color="orange", line_width=2)
        if data.columns[i] == 'Kijun-sen':
            p.line(data.loc[values['initial_date']:values['final_date'], 'Date'],
                   data.loc[values['initial_date']:values['final_date'], 'Kijun-sen'], legend_label="Kijun-sen",
                   line_color="green", line_width=2)
        if data.columns[i] == 'Chikou-span':
            p.line(data.loc[values['initial_date']:values['final_date'], 'Date'],
                   data.loc[values['initial_date']:values['final_date'], 'Chikou-span'], legend_label="Chikou-span",
                   line_color="purple", line_dash="4 4", line_width=2)
        if data.columns[i] == 'Senkou-span A':
            p.line(data.loc[values['initial_date']:values['final_date'], 'Date'],
                   data.loc[values['initial_date']:values['final_date'], 'Senkou-span A'], legend_label="Senkou-span A",
                   line_color="red", line_dash="4 4", line_width=2)
            cloud += 1
        if data.columns[i] == 'Senkou-span B':
            p.line(data.loc[values['initial_date']:values['final_date'], 'Date'],
                   data.loc[values['initial_date']:values['final_date'], 'Senkou-span B'], legend_label="Senkou-span B",
                   line_color="navy", line_dash="4 4", line_width=2)
            cloud += 1

        # Area covered between the Senkou-span A and Senkou-span B function
        if cloud == 2:
            p.varea(data.loc[values['initial_date']:values['final_date'], 'Date'],
                    data.loc[values['initial_date']:values['final_date'], 'Senkou-span A'],
                    data.loc[values['initial_date']:values['final_date'], 'Senkou-span B'], color='blue',
                    fill_alpha=0.1)

        # Buy signal and sale signal in the figure
        if data.columns[i] == 'Buy':
            p.asterisk(x=data[(data['Buy'] == 1)].loc[values['initial_date']:values['final_date'], 'Date'],
                       y=data[(data['Buy'] == 1)].loc[values['initial_date']:values['final_date'], 'Close'] + 7, size=5,
                       color="green", line_width=2)
        if data.columns[i] == 'Sell':
            p.asterisk(x=data[(data['Sell'] == 1)].loc[values['initial_date']:values['final_date'], 'Date'],
                       y=data[(data['Sell'] == 1)].loc[values['initial_date']:values['final_date'], 'Close'] + 7,
                       size=5, color="red", line_width=2)
    output_file('graph2.html')
    show(p)
    return json.dumps(json_item(p, "myplot"))
