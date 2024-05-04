from .base import *
from .utils import get_secret

db = get_secret("db/prod")
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'SecondCity',
        'USER': 'admin',
        'PASSWORD': 'lIpw5wSpUYomxAy9O233',
        'HOST': 'secondcity.cr6amo0kc6sm.us-east-1.rds.amazonaws.com',
        'PORT': '3306',
    }
}

ALLOWED_HOSTS = [
    'localhost',
    '127.0.0.1',
    '*'
]