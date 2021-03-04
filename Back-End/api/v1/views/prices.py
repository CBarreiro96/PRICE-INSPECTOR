#!/usr/bin/python3
"""RestFul API actions for prices"""
from models.price import Price
from models.company import Company
from models import storage
from api.v1.views import app_views
from flask import abort, jsonify, make_response, request
from flasgger.utils import swag_from


@app_views.route('/companies/<company_id>/prices', methods=['GET'],
                 strict_slashes=False)
@swag_from('documentation/price/prices_by_company.yml', methods=['GET'])
def get_prices(company_id):
    """
    Retrieves the list of all prices objects
    of a specific Company, or a specific price
    """
    list_prices = []
    company = storage.get(Company, company_id)
    if not company:
        abort(404)
    for price in company.prices:
        list_prices.append(price.to_dict())

    return jsonify(list_prices)


@app_views.route('/prices/<price_id>/', methods=['GET'], strict_slashes=False)
@swag_from('documentation/price/get_price.yml', methods=['GET'])
def get_price(price_id):
    """
    Retrieves a specific price based on id
    """
    price = storage.get(Price, price_id)
    if not price:
        abort(404)
    return jsonify(price.to_dict())


@app_views.route('/prices/<price_id>', methods=['DELETE'], strict_slashes=False)
@swag_from('documentation/price/delete_price.yml', methods=['DELETE'])
def delete_price(price_id):
    """Deletes a price based on id provided"""
    price = storage.get(Price, price_id)

    if not price:
        abort(404)
    storage.delete(price)
    storage.save()

    return make_response(jsonify({}), 200)


@app_views.route('/companies/<company_id>/prices', methods=['POST'],
                 strict_slashes=False)
@swag_from('documentation/price/post_price.yml', methods=['POST'])
def post_price(company_id):
    """Creates a Price"""
    company = storage.get(Company, company_id)
    if not company:
        abort(404)
    if not request.get_json():
        abort(400, description="Not a JSON")
    if 'p_date' not in request.get_json():
        abort(400, description="Missing p_date")

    data = request.get_json()
    instance = Price(**data)
    instance.company_id = company.id
    instance.save()
    return make_response(jsonify(instance.to_dict()), 201)


@app_views.route('/prices/<price_id>', methods=['PUT'], strict_slashes=False)
@swag_from('documentation/price/put_price.yml', methods=['PUT'])
def put_price(price_id):
    """Updates a Price"""
    price = storage.get(Price, price_id)
    if not price:
        abort(404)

    if not request.get_json():
        abort(400, description="Not a JSON")

    ignore = ['id', 'company_id', 'created_at', 'updated_at']

    data = request.get_json()
    for key, value in data.items():
        if key not in ignore:
            setattr(price, key, value)
    storage.save()
    return make_response(jsonify(price.to_dict()), 200)


@app_views.route('/prices/update', methods=['GET'],
                 strict_slashes=False)
@swag_from('documentation/price/update.yml', methods=['GET'])
def get_update():
    """updtadates prices"""
    storage.data_feed()
    return jsonify("updated")


@app_views.route('/prices/last_date', methods=['GET'],
                 strict_slashes=False)
@swag_from('documentation/price/last_date.yml', methods=['GET'])
def get_last_date():
    """Retrives the last date of the prices"""
    return jsonify(str(storage.last_date()))
