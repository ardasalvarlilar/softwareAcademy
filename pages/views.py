from django.shortcuts import render
from kadro.models import *
from .models import *
# Create your views here.

def index(request):
    all_questions = Questions.objects.all()
    egitimler = Education.objects.all()
    
    even_id_questions = [question for question in all_questions if question.id % 2 == 0]

    odd_id_questions = [question for question in all_questions if not question.id % 2 == 0]

    return render(request, 'index.html', {
        'yorumlar': even_id_questions,
        'baskaYorumlar': odd_id_questions,
        'egitimler': egitimler
    })

def kadromuz(request):
  personel = Kadro.objects.all()
  return render(request, 'kadromuz.html',{
    'personel': personel
  })