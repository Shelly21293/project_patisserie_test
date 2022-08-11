from django.contrib import admin
from .models.bookModel import Book
from .models.loanModel import Loan

# Register your models here.

admin.site.register(Book)
admin.site.register(Loan)



