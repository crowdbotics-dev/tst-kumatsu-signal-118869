from django.conf import settings
from django.db import models
class Kuma001(models.Model):
    'Generated Model'
    signal1 = models.CharField(max_length=220,)
    signal2 = models.BigIntegerField(null=True,blank=True,)
    singal3 = models.EmailField(null=True,blank=True,max_length=254,)
    rel_user_1_1 = models.OneToOneField("users.User",null=True,blank=True,on_delete=models.CASCADE,related_name="kuma001_rel_user_1_1",)
    rel_user_n_n = models.ManyToManyField("users.User",null=True,blank=True,related_name="kuma001_rel_user_n_n",)
    def test_method(self):
        import requests
        response = requests.get("https://hello.com")
        data = response.json()
        print(data)
        return data
class Salar(models.Model):
    'Generated Model'
    name = models.CharField(max_length=100,)
    salary = models.DecimalField(max_digits=10,decimal_places=2,)
    position = models.CharField(max_length=100,)
    department = models.CharField(max_length=100,)
    hire_date = models.DateField()
    is_active = models.BooleanField(default="True",)
