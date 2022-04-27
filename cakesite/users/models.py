from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from djongo import models
from .managers import AccountManager


class CustomerProfile(models.Model):
    first_name = models.CharField(max_length=150, blank=True)
    last_name = models.CharField(max_length=150, blank=True)
    cellphone = models.CharField(blank=True, default=None, max_length=10)
    address_first = models.CharField(max_length=250, blank=True)
    address_second = models.CharField(max_length=250, blank=True)

    class Meta:
        abstract = True


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

    customer_profile = models.EmbeddedField(
        model_container=CustomerProfile,
    )
    objects = AccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email
