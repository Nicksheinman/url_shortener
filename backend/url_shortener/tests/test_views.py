import pytest
from django.contrib.auth.models import User
from url_shortener.views import  LinkViewSet, LoginView
from rest_framework.test import APIClient


@pytest.fixture()
def user_test(db):
    return User.objects.create_user(username="user_test", password="1234567")

    
def test_login(user_test):
    client=APIClient()
    user={
        "username":"user_test",
        "password": "1234567"
    }
    response=client.post('http://127.0.0.1:8000/api/login/', user)
    assert response.status_code== 200

@pytest.fixture()
def client_auth(user_test):
    client=APIClient()
    client.force_authenticate(user=user_test)
    return client
