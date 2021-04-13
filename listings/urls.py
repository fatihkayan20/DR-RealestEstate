from django.urls import path
from .views import  *

urlpatterns=[
    path('' , ListingsView.as_view()),
    path('search' , SearchView.as_view()),
    path('<slug>' , ListingView.as_view()),
]