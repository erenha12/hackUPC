from django.urls import path
from . import views


urlpatterns = [
    path('advisor/', views.get_chatbot_response ,name='get_chatbot_response'),
]