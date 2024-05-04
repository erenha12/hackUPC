import cohere
import csv

co = cohere.Client('kmTEu2kIBQs4EAF45pncLy2CTICQMuhM7rN8ES7t')

query = 'What is the cheapest city?'

def csv_to_json(csv_file_path):
    json_data = []
    with open(csv_file_path, 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            json_data.append(row)
    return json_data

json_data = csv_to_json('cities_europe.csv')

results = co.rerank(query=query, documents=json_data, top_n=3, model='rerank-english-v3.0', rank_fields=["city", "country", "BeerDomesticRestaurant", "Apt1BedroomCityCtr"])
# print(results)

