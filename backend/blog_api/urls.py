from django.urls import path
from .views import PostDetail, PostDetailFilter, PostListView, PostViewset
from rest_framework.routers import DefaultRouter

app_name = 'blog_api'

router = DefaultRouter()

router.register('crudpost', PostViewset, basename="user")

url_patterns = [
    # path('',PostListView.as_view(),name='listcreate'),
    path('posts/<str:pk>/',PostDetail.as_view(),name='detaillist'),
    path('search/',PostDetailFilter.as_view(),name='postsearch'),
    #Search by slug
    
]

urlpatterns = router.urls + url_patterns