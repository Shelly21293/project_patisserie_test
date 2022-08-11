from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Book(models.Model):
    name = models.CharField(max_length=50,null=True,blank=True)
    author = models.CharField(max_length=50,null=True,blank=True)
    year_Published = models.DecimalField(max_digits=4,decimal_places=0,default=1993)
    image = models.ImageField(null=True,blank=True,default='/placeholder.png')
    createdTime=models.DateTimeField(auto_now_add=True)
    _id=models.AutoField(primary_key=True,editable=False)
    # fields =['_id','desc','price']
    def __str__(self):
     	return f'{self.name}, {self.author}, {self.year_Published} '