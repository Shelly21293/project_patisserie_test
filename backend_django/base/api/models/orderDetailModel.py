from django.db import models
from .categoryModel import Category
from .orderModel import Order
from .productModel import Product
from django.db.models import ManyToManyField


# Create your models here.

class OrderDetail(models.Model):
    _id=models.AutoField(primary_key=True,editable=False)
    order_id = models.ForeignKey(Order, on_delete=models.CASCADE, null=True)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE, null=True)
    category_id= models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
    quantity = models.DecimalField(max_digits=4,decimal_places=0,default=0)
    
    # fields =['_id','desc','price']
    def __str__(self):
     	return {self._id}