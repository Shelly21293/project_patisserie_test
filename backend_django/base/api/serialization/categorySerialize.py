from rest_framework import serializers
from ..models.categoryModel import Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
 
    def getCategory(self,obj):
        return {
                "id":obj._id,
                "desc":obj.desc,
                
            }