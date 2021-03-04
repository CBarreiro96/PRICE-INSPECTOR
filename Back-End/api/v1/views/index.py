#!/usr/bin/python3
"""Index """
from models.user import User
from models.company import Company
from models.price import Price
from models.strategy import Strategy
from models.backtest import Backtest
from models import storage
from api.v1.views import app_views
from flask import jsonify


@app_views.route('/status', methods=['GET'], strict_slashes=False)
def status():
    """Status of the API"""
    return jsonify({"status": "OK"})


@app_views.route('/stats', methods=['GET'], strict_slashes=False)
def number_objects():
    """Retrieves the number of objects of each type"""
    classes = [Company, Price]
    names = ["companies", "prices"]

    num_objs = {}
    for i in range(len(classes)):
        num_objs[names[i]] = storage.count(classes[i])

    return jsonify(num_objs)
