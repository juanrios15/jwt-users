from django.urls import path
from .views import  CustomUserCreate, BlacklistTokenUpdateView

app_name = 'users_api'

urlpatterns = [
    path('register/',CustomUserCreate.as_view(),name='register'),
    path('logout/blacklist/',BlacklistTokenUpdateView.as_view(),name='blacklist'),
]