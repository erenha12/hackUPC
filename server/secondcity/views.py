from django.http import JsonResponse
from . import models

def get_cities(request):
    print("TEST")
    cities = models.Cities.objects.all()
    cities_data = list(cities.values("city", "country", "mealinexpensive", "water"))  # Specify fields to return
    
    return JsonResponse({"cities": cities_data})
