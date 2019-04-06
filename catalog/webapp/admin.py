from django.contrib import admin
from webapp.models import Product, Photo, Category, Order


class ProductAdmin(admin.ModelAdmin):
    list_display = ['pk', 'name', 'receipt_date']
    ordering = ['-receipt_date']
    search_fields = ['name', 'id']


def list_admin_with_pk(*fields):
    class PkListAdmin(admin.ModelAdmin):
        list_display = ['pk'] + list(fields)
    return PkListAdmin


admin.site.register(Product, ProductAdmin)
admin.site.register(Photo, list_admin_with_pk('photo'))
admin.site.register(Category, list_admin_with_pk('name'))
admin.site.register(Order, list_admin_with_pk('user'))

