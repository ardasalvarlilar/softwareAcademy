from django.db import models

# Create your models here.
class City(models.Model):
  title = models.CharField(max_length=20)
  def __str__(self):
    return f'{self.title}'
  
class EduProgram(models.Model):
  title = models.CharField(max_length=100)
  quota = models.IntegerField()
  date = models.DateField()
  price = models.DecimalField(max_digits=10,decimal_places=2)
  city = models.ForeignKey(City, on_delete=models.CASCADE)