from django.urls import path
from .views import LinkViewSet
from django.urls import include
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register(r'links', LinkViewSet, basename='links')

urlpatterns = [
    path('', include(router.urls)),
]
