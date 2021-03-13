#!/bin/bash
curl -X PUT http://0.0.0.0:5000/api/v1/companies/recomendations/ -H "Content-Type: application/json" -d '{"strategy_id": "4ae2e0f8-6f05-4804-96ca-2e53d87a322e", "companies_ids": "[\"3ad07a5f-d99b-4828-9e31-e4cc8a3b4c78\", \"81102a08-c8cd-44c5-ad1b-5c0d7509b5b9\"]"}' -vvv
