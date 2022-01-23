

from .models import Post, Comment
from rest_framework import serializers
from django.contrib.auth.models import User








class PostSerializer(serializers.HyperlinkedModelSerializer):

    image_ftp = serializers.CharField(read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'title', 'description', 'image','image_ftp', 'status', 'created_date', 'published_date']
        read_only_fields = ['created_date','published_date','status','image_ftp']

    def create(self, validated_data):
        validated_data['image_ftp'] = "LINK_DO_FTP"
        return super(PostSerializer, self).create(validated_data)


        
        


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'post', 'text', 'created_date', 'edit_date']
        read_only_fields = ['created_date','edit_date']
        #author





