from django.db import models

# Create your models here.
class Category(models.Model):
  title = models.CharField(max_length=50)

  def __str__(self):
    return f'{self.title}'

class Kadro(models.Model):
  full_name = models.CharField(max_length=100)
  image_url = models.ImageField(upload_to='persomal-picture')
  category = models.ManyToManyField(Category)

  def __str__(self):
    return f'{self.full_name}'