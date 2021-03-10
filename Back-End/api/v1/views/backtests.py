#!/usr/bin/python3
"""RestFul API actions for backtests"""
from models.user import User
from models.company import Company
from models.strategy import Strategy
from models.backtest import Backtest
from models import storage
from api.v1.views import app_views
from flask import abort, jsonify, make_response, request
from flasgger.utils import swag_from


@app_views.route('/users/<user_id>/backtests', methods=['GET'],
                 strict_slashes=False)
@swag_from('documentation/backtest/get_backtests.yml', methods=['GET'])
def get_backtests(user_id):
    """Retrieves the list of all Backtest objects of a User"""
    user = storage.get(User, user_id)

    if not user:
        abort(404)

    backtests = [backtest.to_dict() for backtest in user.backtests]

    return jsonify(backtests)


@app_views.route('/backtests/<backtest_id>', methods=['GET'],
                 strict_slashes=False)
@swag_from('documentation/backtest/get_backtest.yml', methods=['GET'])
def get_backtest(backtest_id):
    """Retrieves a Backtest object"""
    backtest = storage.get(Backtest, backtest_id)
    if not backtest:
        abort(404)

    return jsonify(backtest.to_dict())


@app_views.route('/backtests/<backtest_id>', methods=['DELETE'],
                 strict_slashes=False)
@swag_from('documentation/backtest/delete_backtest.yml', methods=['DELETE'])
def delete_backtest(backtest_id):
    """Deletes a Backtest Object"""

    backtest = storage.get(Backtest, backtest_id)

    if not backtest:
        abort(404)

    storage.delete(backtest)
    storage.save()

    return make_response(jsonify({}), 200)


@app_views.route('/users/<user_id>/backtests', methods=['POST'],
                 strict_slashes=False)
@swag_from('documentation/backtest/post_backtest.yml', methods=['POST'])
def post_backtest(user_id):
    """Creates a Backtest"""
    user = storage.get(User, user_id)

    if not user:
        abort(404)

    if not request.get_json():
        abort(400, description="Not a JSON")

    data = request.get_json()

    if 'user_id' not in request.get_json():
        abort(400, description="Missing user_id")

    user = storage.get(User, data['user_id'])

    if not user:
        abort(404)

    if 'name' not in data:
        abort(400, description="Missing name")

    data["user_id"] = user_id
    instance = Backtest(**data)
    instance.save()
    return make_response(jsonify(instance.to_dict()), 201)


@app_views.route('/backtests/<backtest_id>', methods=['PUT'],
                 strict_slashes=False)
@swag_from('documentation/backtest/put_backtest.yml', methods=['PUT'])
def put_backtest(backtest_id):
    """Updates a Backtest"""
    backtest = storage.get(Backtest, backtest_id)

    if not backtest:
        abort(404)

    data = request.get_json()
    if not data:
        abort(400, description="Not a JSON")

    ignore = ['id', 'created_at', 'updated_at']

    for key, value in data.items():
        if key not in ignore:
            setattr(backtest, key, value)
    storage.save()
    return make_response(jsonify(backtest.to_dict()), 200)


@app_views.route('/run_backtest', methods=['PUT'],
                 strict_slashes=False)
@swag_from('documentation/backtest/put_run_backtest.yml', methods=['PUT'])
def put_run_backtest():
    """asks the Back-End to run a backtest"""

    data = request.get_json()
    if not data:
        abort(400, description="Not a JSON")

    if 'strategy_id' not in data:
        abort(400, description="Missing strategy_id")

    if 'company_id' not in data:
        abort(400, description="Missing company_id")

    if 'initial_date' not in data:
        abort(400, description="Missing initial_date")

    if 'final_date' not in data:
        abort(400, description="Missing final_date")

    if 'stop_loss' not in data:
        abort(400, description="Missing stop_loss")

    if 'initial_balance' not in data:
        abort(400, description="Missing initial_balance")

    backtesting = storage.run_backtester(**data)
    return make_response(jsonify(backtesting, 200))
