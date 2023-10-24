# coding: utf-8
from rest_framework import routers

from user_profile import views

user_profile_router = routers.DefaultRouter()

user_profile_router.register(r'register', views.RegisterView)
user_profile_router.register(r'profile', views.UserViewSet)
