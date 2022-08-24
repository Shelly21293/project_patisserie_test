from django.db import models


# Create your models here.

class Category(models.Model):
    _id=models.AutoField(primary_key=True,editable=False)
    desc =models.CharField(max_length=50,null=True,blank=True)

    
    # fields =['_id','desc','price']
    def __str__(self):
     	     	return {self._id}