from webapp.models import Product, Photo, Category, Order
from rest_framework import viewsets
from api.serializers import ProductSerializer, PhotoSerializer, CategorySerializer, OrderSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('-receipt_date')
    serializer_class = ProductSerializer


class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer