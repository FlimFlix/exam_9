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
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]