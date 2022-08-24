from rest_framework import serializers
from api.models.orderModel import Order


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
 
    def getOrder(self,obj):
        return {
                "id":obj._id,
                "user_id":obj.user._id,
                "orderDetail_id":obj.orderDetail._id,
                "createdTime":obj.createdTime,
            }

