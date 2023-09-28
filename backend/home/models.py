from django.conf import settings
from django.db import models
class Kuma001(models.Model):
    'Generated Model'
    signal1 = models.CharField(max_length=220,)
    signal2 = models.BigIntegerField(null=True,blank=True,)
    singal3 = models.EmailField(max_length=254,null=True,blank=True,)
