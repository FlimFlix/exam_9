from django.urls import include, path
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'products', views.ProductViewSet)
router.register(r'photo', views.PhotoViewSet)
router.register(r'categories', views.CategoryViewSet)
router.register(r'orders', views.OrderViewSet)


app_name = 'api'

urlpatterns = [
    path('', include(router.urls)),
    path('login/', views.LoginView.as_view(), name='api_token_auth'),
    path('register/', views.UserCreateView.as_view(), name='register'),
    path('token-login/', views.TokenLoginView.as_view(), name='api_token_re_login')
]