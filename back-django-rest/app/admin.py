from django.contrib import admin
from .models import Post , Comment
from django.contrib.auth.models import User
from django.utils.safestring import mark_safe



class PostAdmin(admin.ModelAdmin):
    list_display = ['title','status','created_date',]
    #author
    fields= ['title','description','image','image_image','status','created_date','published_date',]
    #author
    readonly_fields = ['created_date','image_image',]
    list_filter = ['status',]

    def image_image(self, obj):
        return mark_safe('<img src="{url}"  />'.format(
            url = obj.image.url,
            )
    )

    class Meta:
        model= Post


admin.site.register(Post, PostAdmin)



class CommentAdmin(admin.ModelAdmin):
    list_display = ['text','post','created_date',]
    #author
    fields= ['post', 'text','created_date','edit_date',]
    #author
    readonly_fields = ['created_date',]
    


    class Meta:
        model= Comment


admin.site.register(Comment, CommentAdmin)



