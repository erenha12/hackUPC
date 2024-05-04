from django.urls import path
from . import views


urlpatterns = [
    path('cities/', views.get_chatbot_response ,name='get_chatbot_response'),
]