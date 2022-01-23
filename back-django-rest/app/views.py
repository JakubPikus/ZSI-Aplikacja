
from .models import Post, Comment
from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializer import PostSerializer, CommentSerializer





    


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
    


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


