from django.shortcuts import render

from rest_framework import generics
from rest_framework import viewsets
from rest_framework.permissions import BasePermission, DjangoModelPermissions, SAFE_METHODS, IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404
from rest_framework import filters

from blog.models import Post
from .serializers import PostSerializer
# Create your views here.


class PostUserWritePermission(BasePermission):
    message = "Restricted to author only"
    
    def has_object_permission(self, request, view, obj):
        
        if request.method in SAFE_METHODS:
            return True
        return obj.author == request.user
    

class PostListView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PostSerializer
    
    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(author=user)
    
class PostViewset(viewsets.ModelViewSet):
    serializer_class= PostSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        
        user = self.request.user
        return Post.objects.filter(author=user)


# Filtering and retrieving using ListAPIView    
class PostDetail(generics.ListAPIView):
    serializer_class = PostSerializer
    
    def get_queryset(self):
        slug = self.kwargs.get('pk')
        return Post.objects.filter(slug=slug)
    

class PostDetailFilter(generics.ListAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    filter_backends = [filters.SearchFilter]
    search_fields = ['^slug']

