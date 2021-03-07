#!/bin/bash
curl -X PUT http://0.0.0.0:5000/api/v1/run_backtest/ -H "Content-Type: application/json" -d '{"strategy_id": "4ae2e0f8-6f05-4804-96ca-2e53d87a322e", "company_id": "3ad07a5f-d99b-4828-9e31-e4cc8a3b4c78", "initial_date": "2021-02-15", "final_date": "2021-03-01", "stop_loss": "0.05", "param_0_value": "20"}' -vvv
