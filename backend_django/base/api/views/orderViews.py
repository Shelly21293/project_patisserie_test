from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from ..models.productModel import Product
from ..models.categoryModel import Category
from ..models.orderModel import Order
from ..models.orderDetailModel import OrderDetail
from ..serialization import categorySerialize, productSerialize,orderSerialize,orderDetailSerialize
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, IsAdminUser


# Authenticated
# GET 
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrdersForUser(request, id=0):
    user = request.user
    if int(id) > 0: # GET orderdetails per order for user
        order_id = Order.objects.get(_id=id)
        orderDetails=user.orderDetail_set.get(order_id=order_id)
        serializer = orderDetailSerialize.OrderDetailSerializer(orderDetails, many=True)
        return Response(serializer.data)
    else: # GET orders for user
        oldOrders= user.order_set.all()
        serializer = orderSerialize.OrderSerializer(oldOrders, many=True)
        return Response(serializer.data)



# POST
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addOrder(request):
    order= request.data
    user = request.user
    new_order_id= Order.objects.create(user_id=user)
    print(order)
    for x in order:
        # print(x)
        # product_id=x["product_id"]
        # print(product_id)
        prod_id=Product.objects.get(_id=x["product_id"])
        # category_id=Category.objects.get(_id=x["category_id"])
        quantity=x["quantity"]
        OrderDetail.objects.create(order_id=new_order_id,product_id=prod_id,quantity=quantity)
    return Response("Order created")



# Admin
# GET all orders
@api_view(['GET'])
@permission_classes([IsAdminUser])
def getOrders(request):
    orders = Order.objects.all()
    serializer = orderSerialize.OrderSerializer(orders, many=True)
    return Response(serializer.data)

# GET orderdetails per order
@api_view(['GET'])
@permission_classes([IsAdminUser])
def getOrderDetails(request, id=0):
    order_id = Order.objects.get(_id=id)
    orderDetails=OrderDetail.objects.get(order_id=order_id)
    serializer = orderDetailSerialize.OrderDetailSerializer(orderDetails, many=True)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteOrder(request, id=0):
    if int(id) > 0:
        order = Order.objects.get(_id=id)
        order.delete()
        return Response("Order deleted")
    else:
        order = Order.objects.all()
        order.delete()
        return Response("All orders has been deleted")

@api_view(['PATCH'])
@permission_classes([IsAdminUser])
def updateOrderDetail(request, id=0):
    if int(id) > 0:
        # order_id = Order.objects.get(_id=id)
        orderDetail=OrderDetail.objects.get(_id=id)
        
        if "product_id" in request.data:
            orderDetail.product_id=request.data["product_id"]

        if "quantity" in request.data:
            orderDetail.quantity=request.data["quantity"]

        orderDetail.save()
        return Response("Order updated")
    else: 
        return Response("Order to update was not selected")



