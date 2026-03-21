import pytest
from django.contrib.auth.models import User
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
    response=client.post('/api/login/', user)
    assert response.status_code== 200

@pytest.fixture()
def auth_client(user_test):
    client=APIClient()
    client.login(username='user_test', password="1234567")
    return client

def test_logout(auth_client):
    auth_client.post('/api/logout/')
    print(auth_client.get("/api/links/"))
    assert auth_client.get("/api/links/").status_code==403
    
@pytest.fixture()
def links_create(auth_client):
    assert auth_client.post("/api/links/", {"sourse_link":"https://www.youtube.com/"}).status_code==201 
    return auth_client

def test_linkGet(links_create):
    links=links_create.get('/api/links/')
    assert (links.data)[0]['sourse_link']=="https://www.youtube.com/"
    
def test_linkCreate(auth_client):
    auth_client.post("/api/links/", {"sourse_link":"https://www.youtube.com/"})
    links=auth_client.get('/api/links/')
    assert (links.data)[0]['sourse_link']=="https://www.youtube.com/"
    
def test_linkDelete(links_create):
    links_create.delete('/api/links/1/')
    
    links=links_create.get('/api/links/').data
   
    assert len(links)==0

def test_get_csrf_cookie():
    client = APIClient()
    response = client.get('/api/csrf/')

    assert response.status_code == 200
    assert 'csrftoken' in response.cookies

@pytest.fixture()
def CSRF(db):
   client = APIClient()
   return client.get('/api/csrf/')

    
def test_anonimSession(CSRF):
    client=APIClient()
    response = client.get('/api/anonimSession/')
    0
    assert response.status_code == 200
    assert 'sessionid' in response.cookies
