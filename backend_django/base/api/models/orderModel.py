from django.db import models
from django.contrib.auth.models import User
# from .orderDetailModel import OrderDetail


# Create your models here.

class Order(models.Model):
    _id=models.AutoField(primary_key=True,editable=False)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    # orderDetail_id= models.ForeignKey(OrderDetail, on_delete=models.CASCADE, null=True)
    createdTime=models.DateTimeField(auto_now_add=True)
    
    # fields =['_id','desc','price']
    def __str__(self):
     	return {self._id}