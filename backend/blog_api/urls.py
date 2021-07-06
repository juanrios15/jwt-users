from django.urls import path
from .views import PostDetail, PostDetailFilter, PostListView # PostList, PostDetailView, 
from rest_framework.routers import DefaultRouter

app_name = 'blog_api'

# router = DefaultRouter()

# router.register('', PostList, basename="user")

url_patterns = [
    # path('<str:slug>/',PostDetailView.as_view(),name='detailcreate'),
    path('posts/<str:pk>/',PostDetail.as_view(),name='detaillist'),
    
    #Search by slug
    path('search/',PostDetailFilter.as_view(),name='postsearch'),
    path('',PostListView.as_view(),name='listcreate'),
]

# urlpatterns = router.urls + url_patterns
urlpatterns = url_patterns