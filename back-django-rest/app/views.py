
from .models import Post, Comment, Profile
from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializer import PostSerializer, CommentSerializer, ProfileSerializer, UserSerializer




class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer





class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    #print(User.objects.filter(username='kubako'))
    #print(Profile.objects.get(user=User.objects.get(id=1)))
    #print(Profile.objects.all())
    #print(User.objects.all())
    
    serializer_class = PostSerializer
    
    


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


