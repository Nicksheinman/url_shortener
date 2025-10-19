from .models import My_links
from .serializer import LinkSerializer, RegisterSerializer, LoginSerializer
from rest_framework import viewsets, status, permissions, authentication
from .utils import CsrfExemptSessionAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication
from django.contrib.auth import login, logout
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator

class LinkViewSet(viewsets.ModelViewSet):
    queryset=My_links.objects.all()
    serializer_class=LinkSerializer
    
    def get_queryset(self):
        return My_links.objects.all()
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class RegisterUser(APIView):
    permission_classes=[ permissions.AllowAny]
    def post(self, request):
        serializer=RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message':'user created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRF(APIView):
    permission_classes=[ permissions.AllowAny]
    
    def get(self, reguest):
        return Response({"success":"CSRF cookie set"})
    
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