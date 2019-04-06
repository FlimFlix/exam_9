from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'categories'


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, null=True, blank=True)
    receipt_date = models.DateField()
    categories = models.ManyToManyField('Category', related_name='categories', blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name


class Photo(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    photo = models.ImageField(upload_to='photo', null=True, blank=True)


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ManyToManyField('Product', related_name='product')
    phone = models.CharField(max_length=255)
    address = models.CharField(max_length=255, blank=True)
    comment = models.TextField(max_length=2000, null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
