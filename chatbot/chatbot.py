import cohere
import csv
from data import countries_dict, cities_dict
from data_card import data_card

co = cohere.Client('kmTEu2kIBQs4EAF45pncLy2CTICQMuhM7rN8ES7t')

def csv_to_json(csv_file_path):
    json_data = []
    with open(csv_file_path, 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            # for key in row:
            json_data.append(row)
    return json_data

def filter_data():
    input_file = "cost-of-living_v2.csv"
    output_file = "european_cost_of_living.csv"

    # Read data from input CSV file and filter
    filtered_data = []
    with open(input_file, mode='r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            city = row['city']
            if city in cities_dict and row['country'] in countries_dict:
                new_row = {}
                for key in row:
                    if data_card.get(key) and row[key] != 'nan':
                        readable_key = data_card[key]
                        new_row[readable_key] = row[key]
                filtered_data.append(new_row)

    # Write filtered data to output CSV file
    with open(output_file, mode='w', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=filtered_data[0].keys())

        # Write header
        writer.writeheader()

        # Write rows
        for row in filtered_data:
            writer.writerow(row)

filter_data()

file_name = "european_cost_of_living.csv"
json_data = csv_to_json(file_name)

def get_chat(query, data):
    response = co.chat(
        model="command",
        message=query,
        documents=data,
        preamble="You are a friendly relocation assistant helping users pick a new city to live in Europe. Give specific answers to the questions."
    )
    print(response.text)

get_chat('I have a food budget of 500 euros which city should I choose?', json_data)
