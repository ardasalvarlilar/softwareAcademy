from django.shortcuts import render

# Create your views here.

def index(request):
  return render(request, 'index.html')

def kadromuz(request):
  return render(request, 'kadromuz.html')