from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
import uuid
from django.conf import settings
from django.utils.timezone import now


class RegistrationToken(models.Model):
    token = models.UUIDField(default=uuid.uuid4)
    created_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def is_expired(self):
        delta = now() - self.created_at
        delta_hours = delta.total_seconds() / 3600
        return delta_hours > settings.TOKEN_EXPIRATION_HOURS

    def __str__(self):
        return "%s" % self.token


class SoftDeleteManager(models.Manager):
    def active(self):
        return self.filter(is_deleted=False)
    def deleted(self):
        return self.filter(is_deleted=True)


class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, null=True, blank=True)
    receipt_date = models.DateField()
    categories = models.ManyToManyField('Category', related_name='categories', blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def get_absolute_url(self):
        return reverse('api:product-detail', kwargs={'pk': self.pk})

    def get_categories_display(self):
        return self.categories.all()

    def __str__(self):
        return self.name


class Photo(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='photo')
    photo = models.ImageField(upload_to='photo', null=True, blank=True)


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ManyToManyField('Product', related_name='product')
    phone = models.CharField(max_length=255)
    address = models.CharField(max_length=255, blank=True)
    comment = models.TextField(max_length=2000, null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
