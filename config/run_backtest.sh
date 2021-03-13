#!/bin/bash
curl -X PUT http://0.0.0.0:5000/api/v1/run_backtest/ -H "Content-Type: application/json" -d '{"strategy_id": "a0318b96-c763-48f5-a22e-f8907f2d5076", "company_id": "213b23c2-6bc7-4606-b5ed-02e66ac7dc60", "initial_date": "2016-04-14", "final_date": "2021-03-01", "stop_loss": "0.1", "initial_balance": "2000"}' -vvv
