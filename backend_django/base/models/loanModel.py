from django.db import models
from django.contrib.auth.models import User
from base.models.bookModel import Book


# Create your models here.

class Loan(models.Model):
    customer =models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    book =models.ForeignKey(Book,on_delete=models.SET_NULL,null=True)
    Loan_Date=models.DateTimeField(auto_now_add=True)
    Return_Date=models.DateTimeField(auto_now_add=True)
    _id=models.AutoField(primary_key=True,editable=False)
    # fields =['_id','desc','price']
    def __str__(self):
     	return f'{self.customer}, {self.book}, {self.Loan_Date}, {self.Return_Date} '