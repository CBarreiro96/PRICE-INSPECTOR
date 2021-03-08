from datetime import datetime
from bokeh.plotting import figure, output_file, show
from bokeh.plotting import figure
from bokeh.resources import CDN
from bokeh.embed import file_html
from bokeh.embed import json_item
import json
from math import pi


def Graph(Data):
    Año = 2015
    Mes = 3
    Dia = 1
    inc = Data.Close > Data.Open
    dec = Data.Open > Data.Close
    w = 12 * 60 * 60 * 1000  # half day in ms

    TOOLS = "pan,wheel_zoom,box_zoom,reset,save"

    p = figure(x_axis_type="datetime", tools=TOOLS, plot_width=1000,
               x_range=(datetime(2020, 6, 5), datetime(2021, 3, 5)), title="Ichimoku")
    p.xaxis.major_label_orientation = pi / 4
    p.grid.grid_line_alpha = 0.3

    p.segment(Data.Date, Data.High, Data.Date, Data.Low, color="black")
    p.vbar(Data.Date[inc], w, Data.Open[inc], Data.Close[inc], fill_color="#D5E1DD", line_color="black")
    p.vbar(Data.Date[dec], w, Data.Open[dec], Data.Close[dec], fill_color="#F2583E", line_color="black")
    p.line(Data.loc[datetime(Año, Mes, Dia):datetime.now(), 'Date'],
           Data.loc[datetime(Año, Mes, Dia):datetime.now(), 'Tenkan'], legend_label="Tenkan", line_color="orange",
           line_dash="4 4", line_width=2)
    p.line(Data.loc[datetime(Año, Mes, Dia):datetime.now(), 'Date'],
           Data.loc[datetime(Año, Mes, Dia):datetime.now(), 'Kijun-sen'], legend_label="Kijun-sen", line_color="green",
           line_dash="4 4", line_width=2)
    p.line(Data.loc[datetime(Año, Mes, Dia):datetime.now(), 'Date'],
           Data.loc[datetime(Año, Mes, Dia):datetime.now(), 'Chikou-span'], legend_label="Chikou-span",
           line_color="purple",
           line_dash="4 4", line_width=2)
    p.line(Data.loc[datetime(Año, Mes, Dia):datetime.now(), 'Date'],
           Data.loc[datetime(Año, Mes, Dia):datetime.now(), 'Senkou-span A'], legend_label="Senkou-span A",
           line_color="red",
           line_dash="4 4", line_width=2)
    p.line(Data.loc[datetime(Año, Mes, Dia):datetime.now(), 'Date'],
           Data.loc[datetime(Año, Mes, Dia):datetime.now(), 'Senkou-span B'], legend_label="Senkou-span B",
           line_color="navy",
           line_dash="4 4", line_width=2)
    p.varea(Data.loc[datetime(Año, Mes, Dia):datetime.now(), 'Date'],
            Data.loc[datetime(Año, Mes, Dia):datetime.now(), 'Senkou-span A'],
            Data.loc[datetime(Año, Mes, Dia):datetime.now(), 'Senkou-span B'], color='blue', fill_alpha=0.1)
    p.asterisk(x=Data[(Data['Buy'] == Dia)].loc[datetime(Año, Mes, Dia):datetime.now(), 'Date'],
               y=Data[(Data['Buy'] == Dia)].loc[datetime(Año, Mes, Dia):datetime.now(), 'Close']+5, size=5,
               color="green",
               line_width=2)
    p.asterisk(x=Data[(Data['Sell'] == Dia)].loc[datetime(Año, Mes, Dia):datetime.now(), 'Date'],
               y=Data[(Data['Sell'] == Dia)].loc[datetime(Año, Mes, Dia):datetime.now(), 'Close']+5, size=5, color="red",
               line_width=2)
    output_file('graph.html')
    with open('file.json', 'w', encoding="utf-8") as f:
        f.write(json.dumps(json_item(p, "myplot")))
    show(p)
