from django.conf import settings
from django.db import models
class Kuma001(models.Model):
    'Generated Model'
    signal1 = models.CharField(max_length=220,)
    signal2 = models.BigIntegerField(null=True,blank=True,)
    singal3 = models.EmailField(null=True,blank=True,max_length=254,)
class Salar(models.Model):
    'Generated Model'
    name = models.CharField(max_length=100,)
    salary = models.DecimalField(max_digits=10,decimal_places=2,)
    position = models.CharField(max_length=100,)
    department = models.CharField(max_length=100,)
    hire_date = models.DateField()
    is_active = models.BooleanField(default="True",)
