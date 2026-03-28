import pytest
from django.contrib.auth.models import User
from rest_framework.test import APIClient
from django.core import mail
from url_shortener.models import PasswordVertification, EmailVertification

@pytest.fixture()
def user_test(db):
    return User.objects.create_user(username="user_test", password="1234567", email="nick@test.com")

@pytest.fixture()
def CSRF(db):
   client = APIClient()
   client.get('/api/csrf/')
   return client

    
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

def test_registrationEmailSent(CSRF):
    user={"username": "nick","email":"nick@test.com", "password":"1234567", "second_password":"1234567"}
    response = CSRF.post("/api/register/", user)

    assert response.status_code == 201

    
    assert len(mail.outbox) == 1
    assert mail.outbox[0].to == ["nick@test.com"]
    
def test_registrationVertification(CSRF, user_test):
    token_obj = EmailVertification.objects.create(
        user=user_test,
        token="abc123"
    )
    
    print(token_obj.token)
    response=CSRF.post("/api/register_vertify/", {"token": "abc123"})
    assert response.status_code==200
    

def test_logout(auth_client):
    auth_client.post('/api/logout/')

    assert auth_client.get("/api/links/").status_code==403
    
def test_passwordResetEmailSent(CSRF, user_test):
    response = CSRF.post("/api/password_email/", {"email": "nick@test.com"})
    token_obj = PasswordVertification.objects.get(user=user_test)

    assert response.status_code == 200
    assert PasswordVertification.objects.filter(user=user_test).exists()
    
    assert len(mail.outbox) == 1
    assert mail.outbox[0].to == ["nick@test.com"]
    assert token_obj.token in mail.outbox[0].body
    
def test_passwordResetNewPassword(CSRF, user_test):
    CSRF.post("/api/password_email/", {"email": "nick@test.com"})
    token_obj = PasswordVertification.objects.get(user=user_test)

    response = CSRF.post("/api/password_change/", {"password": "12345678", "second_password":"12345678","token":token_obj.token})
    assert response.status_code == 200
   
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

    
def test_anonimSession(CSRF):
    client=APIClient()
    response = client.get('/api/anonimSession/')
    assert response.status_code == 200
    assert 'sessionid' in response.cookies

def test_anonimLinkCreate(CSRF):
        response=CSRF.post("/api/anonimLink/", {"sourse_link":"https://www.youtube.com/"})
        assert response.status_code == 201

        
def test_anonimGet(CSRF):
    CSRF.post("/api/anonimLink/", {"sourse_link":"https://www.youtube.com/"})
    links=CSRF.get('/api/anonimLink/')
    assert (links.data)[0]['sourse_link']=="https://www.youtube.com/"
        
