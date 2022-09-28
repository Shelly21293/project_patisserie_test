from django.urls import path
from ..api.views import loginViews, prodViews, categoryViews, orderViews
from ..api.views.loginViews import MyTokenObtainPairView
from rest_framework_simplejwt.views import (TokenRefreshView)


urlpatterns = [

    # get route's
    # path('', loginViews.getRoutes),

    # register
    path('register/', loginViews.register),

    # login\ token
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    

    # logout
    path('logout/', loginViews.myLogout),


    # prod route's
    path('getproducts/', prodViews.getProducts),
    path('getproduct/<id>', prodViews.getProducts),

    path('getproductspercat/<cat_id>', prodViews.getProductsPerCategoty),

    path('addproduct/', prodViews.addProduct),

    # path('deleteproducts/', prodViews.deleteProducts), *to active in case need to delete ALL products
    path('deleteproduct/<id>', prodViews.deleteProduct),

    path('updateproduct/<id>', prodViews.updateProduct),
    

    # Category route's
    path('getcategories/', categoryViews.getCategories),
    path('getcategory/<id>', categoryViews.getCategories),

    path('addcategory/', categoryViews.addCategory),

    # path('deletecategories/', categoryViews.deleteCategories), *to active in case need to delete ALL cat
    path('deletecategory/<id>', categoryViews.deleteCategory),

    
    path('updatecategory/<id>', categoryViews.updateCategory),



    # Order route's
  
    path('getordersforuser/', orderViews.getOrdersForUser),
    path('getordersforUser/<id>', orderViews.getOrdersForUser),

    path('addorder/', orderViews.addOrder),

    # Admin
    path('getorders/', orderViews.getOrders),
    path('getorderDetails/', orderViews.getOrderDetails),


    # path('deleteOrders/', orderViews.deleteOrders), *to active in case need to delete ALL orders
    path('deleteorder/', orderViews.deleteOrder),
    path('deleteorder/<id>', orderViews.deleteOrder),

    
    path('updateorderDetail/<id>', orderViews.updateOrderDetail),

   
]
