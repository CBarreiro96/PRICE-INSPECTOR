#!/usr/bin/python3
"""RestFul API actions for companies"""
from models.company import Company
from models import storage
from api.v1.views import app_views
from flask import abort, jsonify, make_response, request
from flasgger.utils import swag_from


@app_views.route('/companies', methods=['GET'], strict_slashes=False)
@swag_from('documentation/company/get_company.yml', methods=['GET'])
def get_companies():
    """Retrieves the list of all Companies"""
    all_companies = storage.all(Company).values()
    list_companies = []
    for company in all_companies:
        list_companies.append(company.to_dict())
    return jsonify(list_companies)


@app_views.route('/companies/<company_id>', methods=['GET'],
                 strict_slashes=False)
@swag_from('documentation/company/get_id_company.yml', methods=['GET'])
def get_company(company_id):
    """Retrieves a specific company"""
    company = storage.get(Company, company_id)
    if not company:
        abort(404)

    return jsonify(company.to_dict())


@app_views.route('/companies/<company_id>', methods=['DELETE'],
                 strict_slashes=False)
@swag_from('documentation/company/delete_company.yml', methods=['DELETE'])
def delete_company(company_id):
    """ Deletes a company"""
    company = storage.get(Company, company_id)

    if not company:
        abort(404)

    storage.delete(company)
    storage.save()

    return make_response(jsonify({}), 200)


@app_views.route('/companies', methods=['POST'], strict_slashes=False)
@swag_from('documentation/company/post_company.yml', methods=['POST'])
def post_company():
    """Creates a company"""
    if not request.get_json():
        abort(400, description="Not a JSON")

    if 'name' not in request.get_json():
        abort(400, description="Missing name")

    if 'ticker' not in request.get_json():
        abort(400, description="Missing ticker")

    data = request.get_json()
    instance = Company(**data)
    instance.save()
    return make_response(jsonify(instance.to_dict()), 201)


@app_views.route('/companies/<company_id>', methods=['PUT'],
                 strict_slashes=False)
@swag_from('documentation/company/put_company.yml', methods=['PUT'])
def put_company(company_id):
    """Updates a company"""
    company = storage.get(Company, company_id)

    if not company:
        abort(404)

    if not request.get_json():
        abort(400, description="Not a JSON")

    ignore = ['id', 'created_at', 'updated_at']

    data = request.get_json()
    for key, value in data.items():
        if key not in ignore:
            setattr(company, key, value)
    storage.save()
    return make_response(jsonify(company.to_dict()), 200)
