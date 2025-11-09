from django.urls import path, re_path
from .views import LinkViewSet, RegisterUser, GetCSRF, LoginView, LogoutView, AnonimLinkView, AnonimSession, RedirectView, checkLogin
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
    path('anonimSession/', AnonimSession.as_view(), name="anonimSession"),
    path('anonimLink/',AnonimLinkView.as_view(), name="anonimLink" ),
    re_path(r'^(?P<code>[0-9A-Za-z]+)$', RedirectView.as_view(), name='redirect'),
    path('check/',checkLogin.as_view(), name="check" ),
]
