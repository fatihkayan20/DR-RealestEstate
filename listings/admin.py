from django.contrib import admin
from .models import Listing

class ListingAdmin(admin.ModelAdmin):
    list_display=('id','title','is_published','price','list_date','realtor','slug')
    list_display_links=('id','title')
    exclude=('slug',)
    list_filter=('realtor' ,)
    list_editable=('is_published',)
    search_fields=('title','description','adress','city','state','zipcode','price')
    list_per_page=25

admin.site.register(Listing,ListingAdmin)


