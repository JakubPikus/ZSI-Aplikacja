

from .models import Post, Comment, Profile
from rest_framework import serializers
from django.contrib.auth.models import User



class UserSerializer(serializers.HyperlinkedModelSerializer):


    class Meta:
        model = User
        fields = ['id', 'username', 'email',]


class ProfileSerializer(serializers.HyperlinkedModelSerializer):


    class Meta:
        model = Profile
        fields = ['id', 'user',]
        
        





class PostSerializer(serializers.HyperlinkedModelSerializer):


    class Meta:
        model = Post
        fields = ['id', 'post_author', 'title', 'description', 'image', 'status', 'created_date',]
        read_only_fields = ['created_date','status',]





class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'comment_author', 'post', 'text', 'created_date',]
        read_only_fields = ['created_date',]
        





