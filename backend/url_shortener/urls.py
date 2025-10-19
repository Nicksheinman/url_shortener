from django.urls import path
from .views import LinkViewSet, RegisterUser, GetCSRF, LoginView, LogoutView
from django.urls import include
from rest_framework.routers import DefaultRouter
router=DefaultRouter()
router.register(r'links', LinkViewSet, basename='links')

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('rest_framework.urls')),
    path('register/',RegisterUser.as_view(), name='register'),
    path('login/',LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('csrf/', GetCSRF.as_view(), name="cookie"),
]
