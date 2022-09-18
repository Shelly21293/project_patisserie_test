from rest_framework.serializers import ModelSerializer
from ..models.orderDetailModel import OrderDetail


class OrderDetailSerializer(ModelSerializer):
    class Meta:
        model = OrderDetail
        fields = '__all__'
 
    def getOrderDetail(self,obj):
        return {
                "id":obj._id,
                "order_id":obj.order._id,
                "product_id":obj.product._id,
                "category_id":obj.category._id,
                "quantity":obj.quantity,
                
            }

