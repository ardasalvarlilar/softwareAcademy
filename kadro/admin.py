from django.contrib import admin
from .models import *
from django.utils.safestring import mark_safe

# Register your models here.
class KadroAdmin(admin.ModelAdmin):
  list_display = ('full_name', 'show_cat',)

  def show_cat(self, obj):
    html = '<ul>'
    for i in obj.category.all():
      html += f'<li>{i}</li>'
    html += '</ul>'
    return mark_safe(html)

admin.site.register(Category)
admin.site.register(Kadro, KadroAdmin)
