from .models import My_links
from .serializer import LinkSerializer, RegisterSerializer
from rest_framework import viewsets, status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
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