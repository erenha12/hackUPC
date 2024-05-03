from .base import *
from .utils import get_secret

DEBUG = True

db = get_secret("db/dev")
DATABASES = {
    "default": db
}
