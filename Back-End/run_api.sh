#!/bin/bash
PI_MYSQL_USER=p_inspector_dev PI_MYSQL_PWD=inspector PI_MYSQL_HOST=localhost PI_MYSQL_DB=price_inspector_db PI_API_HOST=0.0.0.0 PI_API_PORT=5000 python3 -m api.v1.app
