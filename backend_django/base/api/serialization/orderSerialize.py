from rest_framework.serializers import ModelSerializer
from ..models.orderModel import Order


class OrderSerializer(ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
 
    def getOrder(self,obj):
        return {
                "id":obj._id,
                "user_id":obj.user._id,
                "createdTime":obj.createdTime,
            }

