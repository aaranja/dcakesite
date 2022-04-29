from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from .managers import AccountManager
from django.db import models


class Account(AbstractUser):
    """
    Account model to all users
    """
    # remove no used fields
    username = None
    first_name = None
    last_name = None

    # set email and usertype fields
    email = models.EmailField(_('email_address'), unique=True)
    user_type = models.CharField(blank=True, max_length=15)
    objects = AccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email
