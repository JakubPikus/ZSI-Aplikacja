from django.urls import include, path
from rest_framework import routers
from .views import PostViewSet, CommentViewSet, ProfileViewSet, UserViewSet
from django.conf.urls.static import static 
from django.conf.urls import url
from django.conf import settings

router = routers.DefaultRouter()
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'profiles', ProfileViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
    url(r'api/', include(router.urls)),
    url(r'api/auth/', include('dj_rest_auth.urls')),
    url(r'api/auth/registration/', include('dj_rest_auth.registration.urls')),

    
]

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 