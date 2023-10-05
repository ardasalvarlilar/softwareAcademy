from django.shortcuts import render
from kadro.models import *
# Create your views here.

def index(request):
  return render(request, 'index.html')

def kadromuz(request):
  personel = Kadro.objects.all()
  return render(request, 'kadromuz.html',{
    'personel': personel
  })