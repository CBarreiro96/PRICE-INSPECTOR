from datetime import datetime
from bokeh.plotting import figure, output_file, show
from bokeh.plotting import figure
from bokeh.resources import CDN
from bokeh.embed import file_html
from bokeh.embed import json_item
import json

def Graph(Data):
    output_file('graph.html')
    Año = 2015
    Mes = 3
    Dia = 1
    p = figure(plot_width=1400, plot_height=500, title="Ichimoku", x_axis_type="datetime", x_axis_label='Date',
               y_axis_label='Price')
    p.line(Data.loc[datetime(Año, Mes, Dia):datetime.now(), 'Date'],
           Data.loc[datetime(Año, Mes, Dia):datetime.now(), 'Close'], legend_label="Price.", line_color="blue",
           line_width=2)
    p.line(Data.loc[datetime(Año, Mes, Dia):datetime.now(), 'Date'],
           Data.loc[datetime(Año, Mes, Dia):datetime.now(), 'Tenkan'], legend_label="Tenkan", line_color="orange",
           line_dash="4 4")
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
            Data.loc[datetime(Año, Mes, Dia):datetime.now(), 'Senkou-span B'], color='orange')
    p.asterisk(x=Data[(Data['Buy'] == Dia)].loc[datetime(Año, Mes, Dia):datetime.now(), 'Date'],
               y=Data[(Data['Buy'] == Dia)].loc[datetime(Año, Mes, Dia):datetime.now(), 'Close'], size=20, color="green",
               line_width=2)
    p.asterisk(x=Data[(Data['Sell'] == Dia)].loc[datetime(Año, Mes, Dia):datetime.now(), 'Date'],
               y=Data[(Data['Sell'] == Dia)].loc[datetime(Año, Mes, Dia):datetime.now(), 'Close'], size=20, color="red",
               line_width=2)
    with open('file.json', 'w', encoding="utf-8") as f:
        f.write(json.dumps(json_item(p, "myplot")))
    show(p)
