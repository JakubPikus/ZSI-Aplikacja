from django.conf import settings
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User, AbstractBaseUser





check_status = (
    ('to_check', 'Oczekuje na sprawdzenie'),
    ('confirmed','Zaakceptowane'),
    ('rejected','Odrzucono')
)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username




class Post(models.Model):
    post_author = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='post_author')
    title = models.CharField(max_length=20)
    description = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/')
    status = models.TextField(choices=check_status,default='to_check')
    created_date = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return self.title




class Comment(models.Model):
    comment_author = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='comment_author')
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return self.text
