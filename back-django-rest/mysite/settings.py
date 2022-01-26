"""
Django settings for mysite project.

Generated by 'django-admin startproject' using Django 2.2.26.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.2/ref/settings/
"""

import os
import environ

env = environ.Env(
    DB_NAME=(str, ''),
    DB_USER=(str, 'root'),
    DB_PASSWORD=(str, ''),
    DB_HOST=(str, ''),
    DB_PORT=(int, 3306)
)


# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'abf)#hk0_6w!w(p6e8w!c@v-uryvm-*go--_)h&@f!7q!9+&th'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites', 
    'app.apps.AppConfig',
    'rest_framework',
    'rest_framework.authtoken',
    'dj_rest_auth',
    'dj_rest_auth.registration',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'corsheaders',

]



MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    "corsheaders.middleware.CorsMiddleware",
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

SITE_ID = 1


REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        #'rest_framework.permissions.AllowAny',
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'dj_rest_auth.jwt_auth.JWTCookieAuthentication',


        #'rest_framework.authentication.SessionAuthentication', # musi byc!

        #'rest_framework.authentication.BasicAuthentication', #nie


        #'rest_framework.authentication.TokenAuthentication', #musi
    ],
}



AUTHENTICATION_BACKENDS = [
    'allauth.account.auth_backends.AuthenticationBackend',
    'django.contrib.auth.backends.ModelBackend',
]

ROOT_URLCONF = 'mysite.urls'



TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'mysite.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

#DATABASES = { #to puste
       # 'default': {
      #  'ENGINE': 'django.db.backends.mysql',
       # 'OPTIONS': {
      #      'sql_mode': 'traditional',
      #  },
      #  'NAME': 'react-django-rest',
      #  'USER': 'kubako1428',
      #  'PASSWORD': 'smokismoki1',
      #  'HOST': '127.0.0.1',
      #  'PORT': '3306',
      #  }
#}

if(len(env('DB_HOST'))):
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql', 
            'NAME': env('DB_NAME'),
            'USER': env('DB_USER'),
            'PASSWORD': env('DB_PASSWORD'),
            'HOST': env('DB_HOST'),
            'PORT': env('DB_PORT'),
        }
     }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        }
    }



# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'pl-pl'

TIME_ZONE = 'Europe/Warsaw'

USE_I18N = True

USE_L10N = True

USE_TZ = True

CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = False
CORS_ORIGIN_WHITELIST = (
    u'http://localhost:8000',
    u'http://127.0.0.1:8000',
    u'http://0.0.0.0:8000',
)


os.environ["GOOGLE_APPLICATION_CREDENTIALS"]="./credential.json"


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

#MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
#MEDIA_URL = '/api/media/'


DEFAULT_FILE_STORAGE = 'storages.backends.gcloud.GoogleCloudStorage'

GS_PROJECT_ID = 'virtual-firefly-307810'
GS_BUCKET_NAME = 'zsi-django-react'
MEDIA_ROOT = "media/"
UPLOAD_ROOT = 'media/uploads/'

MEDIA_URL = 'https://storage.googleapis.com/{}/'.format(GS_BUCKET_NAME)
    
    
    
    
    












EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'


REST_USE_JWT = True # AAA

JWT_AUTH_COOKIE = 'my-app-auth' # AAA

ACCOUNT_AUTHENTICATION_METHOD = 'username' # AAA
ACCOUNT_EMAIL_REQUIRED = False # AAA
ACCOUNT_EMAIL_VERIFICATION = 'none' # AAA

ACCOUNT_CONFIRM_EMAIL_ON_GET = False # AAA

CSRF_COOKIE_SECURE = False # AAA