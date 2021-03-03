#!/bin/bash
curl -X POST http://0.0.0.0:5000/api/v1/companies/528aa32f-cf40-4fa0-a36d-c83299579507/ -H "Content-Type: application/json" -d '{"date_p": "2020-03-03T00:00:00.000000", "open_p": "75.333542", "high_p": "75.415404", "low_p": "70.900400", "close_p": "71.773636", "volume": "319475600"}' -vvv
curl -X POST http://0.0.0.0:5000/api/v1/companies/528aa32f-cf40-4fa0-a36d-c83299579507/prices/ -H "Content-Type: application/json" -d '{"date_p": "2020-03-03T00:00:00.000000", "open_p": "65.430305", "high_p": "68.987728", "low_p": "65.244248", "close_p": "66.030655", "volume": "286744800"}' -vvv


#Open       High        Low      Close     Volume  Dividends  Stock Splits
#Date
#2020-03-03  75.333542  75.415404  70.900400  71.773636  319475600        0.0           0.0
#2020-03-09  65.430305  68.987728  65.244248  66.030655  286744800        0.0           0.0
