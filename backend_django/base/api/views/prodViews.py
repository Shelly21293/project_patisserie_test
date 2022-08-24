from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from ..models.productModel import Product
from ..models.categoryModel import Category
from ..serialization import categorySerialize, productSerialize
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, IsAdminUser


# Anonymous
# GET 
@api_view(['GET'])
def getProducts(request, id=0):
    if int(id) > 0:  # return single prod -READ
        prod = Product.objects.get(_id=id)
        serializer = productSerialize.ProductSerializer().getProduct(prod)
        return JsonResponse(serializer, safe=False)
    else:  # get All -READ
        products = Product.objects.all()
        serializer = []
        for prod in products:
            serializer.append(
                productSerialize.ProductSerializer().getProduct(prod))
        return Response(serializer)
    #    if int(id) > 0:  # return single prod -READ
    #     prod = Product.objects.get(_id=id)
    #     res = productSerialize.ProductSerializer().getProduct(prod)
    #     return JsonResponse(res, safe=False)
    # else:  # get All -READ
    #     res = []
    #     for prod in Product.objects.all():
    #         res.append(
    #             productSerialize.ProductSerializer().getProduct(prod))
    #     return JsonResponse(res, safe=False)

# Admin
@api_view(['GET', 'POST', 'DELETE', 'PUT'])
@permission_classes([IsAuthenticated])
def products(request, id=0):
    if request.method == "GET":  # create
        # user = request.user
        # print(request.user)
        # products = user.product_set.all()
        products = Product.objects.all()
        serializer = productSerialize.ProductSerializer(products, many=True)
        return Response(serializer.data)

    if request.method == "POST":  # create
        Product.objects.create(
            desc=request.data["desc"], price=request.data["price"])
        return Response("Product added")

    if request.method == "DELETE":  # delete
        prod = Product.objects.get(_id=id)
        prod.delete()
        return Response("Product deleted")

    if request.method == "PUT":  # UPDATE
        prod = Product.objects.get(_id=id)
        prod.desc = request.data["desc"]
        prod.price = request.data["price"]
        prod.save()
        return Response("Product updated")


# LOAN
# @api_view(['GET', 'POST', 'DELETE', 'PUT'])
# def loans(request, id=0):
#     if request.method == "GET":
#         if int(id) > 0:  # return single loan -READ
#             loan = Loan.objects.get(_id=id)
#             res = loanSerialize.LoanSerializer().getLoan(loan)
#             return JsonResponse(res, safe=False)
#         else:  # get All -READ
#             res = []
#             for loan in Loan.objects.all():
#                 res.append(categorySerialize.LoanSerializer().getLoan(loan))
#             return JsonResponse(res, safe=False)

#     if request.method == "POST":  # create
#         customer = User.objects.get(id=request.data["customer"])
#         book = Book.objects.get(_id=request.data["book"])
#         Loan.objects.create(customer=customer, book=book)
#         return JsonResponse({'test': request.method})

#     if request.method == "DELETE":  # delete
#         loan = Loan.objects.get(_id=id)
#         loan.delete()
#         return JsonResponse({'test': request.method})

#     if request.method == "PUT":  # UPDATE
#         loan = Loan.objects.get(_id=id)
#         loan.customer = User.objects.get(id=request.data["customer"])
#         loan.book = Book.objects.get(_id=request.data["book"])
#         loan.save()
#         return JsonResponse({'test': request.method})
