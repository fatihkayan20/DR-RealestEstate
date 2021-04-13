from django.urls import path
from .views import  *

urlpatterns= [
    path('',RealtorListView.as_view()),
    path('topseller',TopSellerView.as_view()),
    path('<pk>',RealtorView.as_view()),
]
