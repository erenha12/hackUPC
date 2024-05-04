from django.http import JsonResponse
from . import models

def get_cities(request):
    cities = models.Cities.objects.all()
    cities_data = list(cities.values("city", "country", "avgmonthlynetsalary", "water"))  # Specify fields to return
    
    return JsonResponse({"cities": cities_data})
