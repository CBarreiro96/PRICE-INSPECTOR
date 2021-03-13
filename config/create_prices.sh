#!/bin/bash
curl POST http://0.0.0.0:5000/api/v1/companies/e60f150f-96f1-46e9-a0b2-e25e43dd5707/prices -H "Content-Type: application/json" -d '{"p_date": "2020-03-03", "p_open": "75.333542", "p_high": "75.415404", "p_low": "70.900400", "p_close": "71.773636", "volume": "319475600"}' -vvv
curl POST http://0.0.0.0:5000/api/v1/companies/e60f150f-96f1-46e9-a0b2-e25e43dd5707/prices -H "Content-Type: application/json" -d '{"p_date": "2020-03-09", "p_open": "65.430305", "p_high": "68.987728", "p_low": "65.244248", "p_close": "66.030655", "volume": "286744800"}' -vvv


#Open       High        Low      Close     Volume  Dividends  Stock Splits
#Date
#2020-03-03  75.333542  75.415404  70.900400  71.773636  319475600        0.0           0.0
#2020-03-09  65.430305  68.987728  65.244248  66.030655  286744800        0.0           0.0
