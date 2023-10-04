from django.urls import path
from .views import *
urlpatterns = [
    path('', index, name='indexPage'),
    path('kadromuz/', kadromuz, name='kadromuzPage')
]
