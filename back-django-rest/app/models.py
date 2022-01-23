from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User, AbstractBaseUser





check_status = (
    ('to_check', 'Oczekuje na sprawdzenie'),
    ('confirmed','Zaakceptowane'),
    ('rejected','Odrzucono')
)




class Post(models.Model):
    #author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=20)
    description = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/')
    image_ftp = models.FileField()
    status = models.TextField(choices=check_status,default='to_check')
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)


    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title


class Comment(models.Model):
    #author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    edit_date = models.DateTimeField(blank=True, null=True)

    def publish(self):
        self.edit_date = timezone.now()
        self.save()

    def __str__(self):
        return self.text
