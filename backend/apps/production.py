from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '9s)=24muu+957blp8$v1n_-iv2e!rpn!qg1cv@eisu=wuok9fk'

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = ['*'] 

CACHES = {
    "default": {
        "BACKEND": "django.core.cache.backends.filebased.FileBasedCache",
        "LOCATION": os.path.join(PROJECT_DIR, 'cache'),
    }
}



try:
    from .local import *
except ImportError:
    pass
