#!/bin/bash
curl -X PUT http://0.0.0.0:5000/api/v1/run_backtest/ -H "Content-Type: application/json" -d '{"strategy_id": "07db440a-55b3-4c9f-b9bf-155f76a09367", "company_id": "8c90fadb-07f0-496f-963e-486e955dc11c", "initial_date": "2016-04-14", "final_date": "2021-03-01", "stop_loss": "0.1", "initial_balance": "2000"}' -vvv
