from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import ObtainAuthToken

router = DefaultRouter()

urlpatterns = [
    path('', ObtainAuthToken.as_view()),
    # path('rest-auth/registration/account-confirm-email/', null_view, name='account_confirm_email'),
]
urlpatterns += router.urls
