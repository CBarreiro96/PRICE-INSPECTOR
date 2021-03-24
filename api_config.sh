#!/bin/bash
./config/create_companies.sh
./config/create_strategies.sh
curl 0.0.0.0:5000/api/v1/prices/update


