from django.db import models
from .categoryModel import Category
from .orderModel import Order
from .productModel import Product
from django.db.models import ManyToManyField


# Create your models here.

class OrderDetail(models.Model):
    _id=models.AutoField(primary_key=True,editable=False)
    order_id = models.ForeignKey(Order, on_delete=models.CASCADE, null=False,blank=False)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE, null=False,blank=False)
    quantity = models.DecimalField(max_digits=2,decimal_places=0,default=0)
    
    def __str__(self):
     	return {self._id}