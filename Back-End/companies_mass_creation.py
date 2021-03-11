#!/usr/bin/python3
"""JSON module"""
import json
import requests


def load_from_json_file(filename):
    """Creates an Object from a JSON file"""

    with open(filename, encoding='utf-8') as a_file:
        line = a_file.readline()
        new_object = json.loads(line)
    return new_object

if __name__ == "__main__":
    my_dict = load_from_json_file("./symbol.json")
    symbols = my_dict["Symbol"]
    names = my_dict["Security Name"]
    url = "http://0.0.0.0:5000/api/v1/companies/"
    headers = {"Content-Type": "application/json"}
    for key, ticker in symbols.items():
        values = {}
        values['ticker'] = ticker
        values['name'] = names[key]
        values = json.dumps(values)
        r = requests.post(url, headers=headers, data=values)
        print(r.text)
