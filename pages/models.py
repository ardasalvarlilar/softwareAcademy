from django.db import models

# Create your models here.

class Questions(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(max_length=200)

    def __str__(self):
        return self.title

class Education(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField(max_length=200)

    def __str__(self):
        return self.title