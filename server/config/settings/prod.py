from .base import *
from .utils import get_secret

db = get_secret("db/prod")
DATABASES = {
    "default": db
}

ALLOWED_HOSTS = [
    'localhost',
    '127.0.0.1'
]