from django.urls import path
from .views import home, publications, research, cv, contact

urlpatterns = [
    path('', home, name='home'),
    path('publications/', publications, name='publications'),
    path('research/', research, name='research'),
    path('cv/', cv, name='cv'),
    path('contact/', contact, name='contact'),
]