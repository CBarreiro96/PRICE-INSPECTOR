#!/usr/bin/python3
"""RestFul API actions for strategies"""
from models.strategy import Strategy
from models import storage
from api.v1.views import app_views
from flask import abort, jsonify, make_response, request
from flasgger.utils import swag_from


@app_views.route('/strategies', methods=['GET'], strict_slashes=False)
@swag_from('documentation/strategy/all_strategies.yml')
def get_strategies():
    """list of all strategy objects """
    all_strategies = storage.all(Strategy).values()
    list_strategies = []
    for strategy in all_strategies:
        list_strategies.append(strategy.to_dict())
    return jsonify(list_strategies)


@app_views.route('/strategies/<strategy_id>', methods=['GET'],
                 strict_slashes=False)
@swag_from('documentation/strategy/get_strategy.yml', methods=['GET'])
def get_strategy(strategy_id):
    """ Retrieves a specific strategy """
    strategy = storage.get(Strategy, strategy_id)
    if not strategy:
        abort(404)

    return jsonify(strategy.to_dict())


@app_views.route('/strategies/<strategy_id>', methods=['DELETE'],
                 strict_slashes=False)
@swag_from('documentation/strategy/delete_strategy.yml', methods=['DELETE'])
def delete_strategy(strategy_id):
    """Deletes a strategy"""

    strategy = storage.get(Strategy, strategy_id)

    if not strategy:
        abort(404)

    storage.delete(strategy)
    storage.save()

    return make_response(jsonify({}), 200)


@app_views.route('/strategies', methods=['POST'], strict_slashes=False)
@swag_from('documentation/strategy/post_strategy.yml', methods=['POST'])
def post_strategy():
    """Creates a strategy"""
    if not request.get_json():
        abort(400, description="Not a JSON")

    if 'name' not in request.get_json():
        abort(400, description="Missing name")
    if 'param_0_name' not in request.get_json():
        abort(400, description="Missing param_0_name")
    if 'param_0_value' not in request.get_json():
        abort(400, description="Missing param_0_value")

    data = request.get_json()
    instance = Strategy(**data)
    instance.save()
    return make_response(jsonify(instance.to_dict()), 201)


@app_views.route('/strategies/<strategy_id>', methods=['PUT'],
                 strict_slashes=False)
@swag_from('documentation/strategy/put_strategy.yml', methods=['PUT'])
def put_strategy(strategy_id):
    """Updates a strategy"""
    strategy = storage.get(Strategy, strategy_id)

    if not strategy:
        abort(404)

    if not request.get_json():
        abort(400, description="Not a JSON")

    ignore = ['id', 'email', 'created_at', 'updated_at']

    data = request.get_json()
    for key, value in data.items():
        if key not in ignore:
            setattr(strategy, key, value)
    storage.save()
    return make_response(jsonify(strategy.to_dict()), 200)
