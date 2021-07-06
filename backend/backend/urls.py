from django.contrib import admin
from django.urls import path, include

from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('admin/', admin.site.urls),
    path('',include('blog.urls',namespace='blog')),
    path('api/',include('blog_api.urls',namespace='blogapi')),
    
    # api User
    path('api/user/',include('users.urls',namespace='users')),
    
    # DRF login
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # JWT Auth
    
    # Schema
    path('docs/', include_docs_urls(title='BlogAPI')),
    path('schema/', get_schema_view(
        title="Posts project",
        description="API for blog",
        version="1.0.0"
    ), name='openapi-schema'),
]
