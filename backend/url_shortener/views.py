from .models import My_links, Anonim_link, EmailVertification, PasswordVertification
from .serializer import LinkSerializer, RegisterSerializer, LoginSerializer, AnonimLinkSerializer, ConfirmRegistartionSerializer, PasswordMailSerializer, NewPasswordSerializer
from .permissions import AnonimPermssion
from rest_framework import viewsets, status, permissions, authentication, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication
from django.contrib.auth import login, logout
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator
from django.http import HttpResponseNotFound, HttpResponseRedirect
from .mail.send_email import send_email, send_email_password
from django.contrib.auth.models import User
from django.db import IntegrityError
from rest_framework.exceptions import ValidationError
from django.middleware.csrf import get_token


class LinkViewSet(viewsets.ModelViewSet):
    queryset=My_links.objects.all()
    serializer_class=LinkSerializer
    
    def get_queryset(self):
        return My_links.objects.filter(user=self.request.user)
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class RegisterUser(APIView):
    permission_classes=[ permissions.AllowAny]
    def post(self, request):
        serializer=RegisterSerializer(data=request.data)
        if serializer.is_valid():
            try:
                user = serializer.save()
            except IntegrityError:
                raise ValidationError({
                    "email": "User with this email already exists."
                })
            user.is_active=False
            user.save()
            send_email(user=user)
            return Response({'message':'user created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    
class RegisterVertify(APIView):
    permission_classes=[permissions.AllowAny]
    def post(self, request):
        serializer=ConfirmRegistartionSerializer(data=request.data)
        if serializer.is_valid():
            token=serializer.validated_data['token']
            try:
                vertification=EmailVertification.objects.get(token=token)
            except:
                return HttpResponseNotFound('this token do not exist')
            vertification.is_verificated=True
            vertification.save()
            user=vertification.user
            user.is_active=True
            user.save()
            return Response('user is active')
        


@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRF(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        csrf_token = get_token(request)
        return Response({
            "success": "CSRF cookie set",
            "csrfToken": csrf_token
        })
    
class LoginView(APIView):
    permission_classes=[ permissions.AllowAny]
    
    def post(self, request):
        serializer=LoginSerializer(data=request.data)
        if serializer.is_valid():
            login(request=request, user=serializer.validated_data['user'])
            return Response('login is completed', status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@method_decorator(ensure_csrf_cookie, name='dispatch')
class LogoutView(APIView):
    permission_classes=[ permissions.AllowAny]

    def post(self, request):
        logout(request)
        return Response({'message':'Logged out'})
    
    
class AnonimSession(APIView):
    permission_classes=[ permissions.AllowAny]
    
    def get(self, request):
        
        if request.session.session_key is None:
            request.session['anonim']=True
            return Response({'message':'session created'})
        return Response({'message':'already have a session'})
    

class AnonimLinkView(generics.ListCreateAPIView):
    serializer_class=AnonimLinkSerializer
    permission_classes=[AnonimPermssion]
    
    
    def perform_create(self, serializer):
        if Anonim_link.objects.filter(session_key=self.request.session.session_key):
            Anonim_link.objects.filter(session_key=self.request.session.session_key).delete()
        serializer.save(session_key=self.request.session.session_key, expires_at=self.request.session.get_expiry_date())
    
    def get_queryset(self):
        return Anonim_link.objects.filter(session_key=self.request.session.session_key)

class RedirectView(APIView):
    permission_classes=[ permissions.AllowAny]
    
    def get(self, request, code):
        obj=My_links.objects.filter(new_link=code).first()
        
        if obj:
            return HttpResponseRedirect(obj.sourse_link)
        obj_a=Anonim_link.objects.filter(new_link=code).first()
        if obj_a:
            return HttpResponseRedirect(obj_a.sourse_link)
        else:
            return HttpResponseNotFound("URl not found")
        
        
class checkLogin(APIView):
    permission_classes=[ permissions.AllowAny]
    def get(self, request):
        if request.user.is_authenticated:
            return Response({'message':True})
        else:
            return Response({'message':False})
    

class passwordChangeSendEmail(APIView):
    permission_classes=[ permissions.AllowAny]
    
    def post(self, request):
        serializer=PasswordMailSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data['email']
        
        try:
            user=User.objects.get(email=email)
            send_email_password(user=user)
            return Response(status=200)
        
        except:
            return  Response(status=200)


class PasswordVertify(APIView):
    permission_classes=[permissions.AllowAny]
    def post(self, request):
        serializer=NewPasswordSerializer(data=request.data)
        if serializer.is_valid():
            token=serializer.validated_data['token']
            try:
                password=PasswordVertification.objects.get(token=token)
            except:
                return HttpResponseNotFound('this token do not exist')
            user=password.user
            user.set_password(serializer.validated_data['password'])
            user.save()
            password.delete()
            return Response('password change complete')
        return Response(serializer.errors, status=400)