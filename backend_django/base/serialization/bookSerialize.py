from rest_framework import serializers
from base.models.bookModel import Book


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('_id', 'name', 'author')
 
    def getBook(self,obj):
        return {
                "id":obj._id,
                "name":obj.name,
                "author":obj.author,
                "year_Published":obj.year_Published,
                "image":str(obj.image),
                "createdTime":obj.createdTime,
                # "user":obj.user.username,
            }

# class Book(models.Model):
#     user =models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
#     name = models.CharField(max_length=50,null=True,blank=True)
#     author = models.CharField(max_length=50,null=True,blank=True)
#     price = models.DecimalField(max_digits=5,decimal_places=2)
#     image = models.ImageField(null=True,blank=True,default='/placeholder.png')
#     createdTime=models.DateTimeField(auto_now_add=True)
#     _id=models.AutoField(primary_key=True,editable=False)
#     # fields =['_id','desc','price']
#     def __str__(self):
#      	return f'{self.name}, {self.author}, {self.price} '
