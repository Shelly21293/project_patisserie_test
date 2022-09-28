from django.db import models
from django.contrib.auth.models import User
# from .orderDetailModel import OrderDetail


# Create your models here.

class Order(models.Model):
    _id=models.AutoField(primary_key=True,editable=False)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, null=False,blank=False)
    createdTime=models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
     	return {self._id}