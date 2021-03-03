#!/bin/bash
curl -X POST http://0.0.0.0:5000/api/v1/companies/ -H "Content-Type: application/json" -d '{"name": "Apple Inc", "ticker": "AAPL"}' -vvv
curl -X POST http://0.0.0.0:5000/api/v1/companies/ -H "Content-Type: application/json" -d '{"name": "Microsoft Corporation", "ticker": "MSFT"}' -vvv
