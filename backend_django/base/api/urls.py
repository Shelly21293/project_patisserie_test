from django.urls import path
from ..api.views import loginViews, prodViews
from ..api.views.loginViews import MyTokenObtainPairView
from rest_framework_simplejwt.views import (TokenRefreshView)


urlpatterns = [

    # url's from login views

    # get route's
    path('', loginViews.getRoutes),

    # register
    path('register/', loginViews.register),

    # login\ token
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # prod route's
    path('products', prodViews.products),
    path('getProducts', prodViews.getProducts),
    path('getProducts/<id>', prodViews.getProducts),
    
    path('products/<id>', prodViews.products),



    # path('loans', views.loans),
    # path('loans/<id>', views.loans),
    # path('notes/', views.getNotes),
    # path('one/', views.getOneNote),
]
