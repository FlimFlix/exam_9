from webapp.models import Product, Photo, Category, Order
from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api:category-detail')

    class Meta:
        model = Category
        fields = ('url', 'id', 'name', 'description')


class PhotoSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api:photo-detail')

    class Meta:
        model = Photo
        fields = ('url', 'id', 'photo')


class OrderSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api:order-detail')

    class Meta:
        model = Order
        fields = ('url', 'id', 'product', 'phone', 'address', 'comment', 'created_date')


class InlinePhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ('id', 'photo')


class InlineCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'description')


class ProductSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api:product-detail')
    photo = InlinePhotoSerializer(many=True, read_only=True)
    categories = InlineCategorySerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ('url', 'id', 'name', 'photo', 'categories', 'description', 'receipt_date', 'price')

