from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models.bookModel import Book
from .models.loanModel import Loan
from .serialization import bookSerialize,loanSerialize
from django.contrib.auth.models import User


# Create your views here.

def index(request):
    return JsonResponse({'test':'GET'})

@api_view(['GET','POST','DELETE','PUT'])
def books(request,id=0):
    if request.method =="GET": 
        if int(id) >0 : # return single book -READ
            book =Book.objects.get(_id=id)
            res=bookSerialize.BookSerializer().getBook(book)
            return JsonResponse(res,safe=False)
        else: #get All -READ
            res=[]
            for book in Book.objects.all():
                res.append(bookSerialize.BookSerializer().getBook(book))
            return JsonResponse(res,safe=False)

    if request.method =="POST": # create
        Book.objects.create(name =request.data["name"] ,author=request.data["author"], year_Published=request.data["year_Published"])
        return JsonResponse({'test':request.method})

    if request.method =="DELETE": #delete
        book=Book.objects.get(_id=id)
        book.delete()
        return JsonResponse({'test':request.method})
    
    if request.method =="PUT": #UPDATE
        book=Book.objects.get(_id=id)
        book.name=request.data["name"]
        book.author=request.data["author"]
        book.year_Published=request.data["year_Published"]
        book.save()
        return JsonResponse({'test':request.method})



@api_view(['GET','POST','DELETE','PUT'])
def loans(request,id=0):
    if request.method =="GET": 
        if int(id) >0 : # return single loan -READ
            loan =Loan.objects.get(_id=id)
            res=loanSerialize.LoanSerializer().getLoan(loan)
            return JsonResponse(res,safe=False)
        else: #get All -READ
            res=[]
            for loan in Loan.objects.all():
                res.append(loanSerialize.LoanSerializer().getLoan(loan))
            return JsonResponse(res,safe=False)

    if request.method =="POST": # create
        customer= User.objects.get(id=request.data["customer"])
        book= Book.objects.get(_id=request.data["book"])
        Loan.objects.create(customer = customer,book=book)
        return JsonResponse({'test':request.method})

    if request.method =="DELETE": #delete
        loan=Loan.objects.get(_id=id)
        loan.delete()
        return JsonResponse({'test':request.method})
    
    if request.method =="PUT": #UPDATE
        loan=Loan.objects.get(_id=id)
        loan.customer=User.objects.get(id=request.data["customer"])
        loan.book=Book.objects.get(_id=request.data["book"])
        loan.save()
        return JsonResponse({'test':request.method})