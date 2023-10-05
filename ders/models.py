from django.db import models

# Create your models here.
class City(models.Model):
  title = models.CharField(max_length=20)
  def __str__(self):
    return f'{self.title}'
  
class Day(models.Model):
    name = models.CharField(max_length=50, choices=(
        ('Pazartesi, Salı, Perşembe Cuma', 'Pazartesi, Salı, Perşembe Cuma'),
        ('Cumartesi, Pazar', 'Cumartesi Pazar')

    ))

    def __str__(self):
        return self.name




class TimeSlot(models.Model):
    start_time = models.TimeField()
    end_time = models.TimeField()

    def __str__(self):
      return f"{self.start_time} - {self.end_time}"
  
class EduProgram(models.Model):
  title = models.CharField(max_length=100)
  quota = models.IntegerField()
  price = models.DecimalField(max_digits=10,decimal_places=2)
  city = models.ForeignKey(City, on_delete=models.CASCADE)
  days = models.ManyToManyField(Day)
  time_slots = models.ManyToManyField(TimeSlot)

  def __str__(self):
    return f'{self.title} {self.city}'
  



