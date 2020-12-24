from django.urls import path
from Cblog import views 
urlpatterns = [
    path('',views.welcomePage,name="w-h"),
]