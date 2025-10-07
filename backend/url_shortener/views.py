from django.shortcuts import render
from .models import My_links
from .serializer import LinkSerializer
from rest_framework import viewsets
class LinkViewSet(viewsets.ModelViewSet):
    queryset=My_links.objects.all()
    serializer_class=LinkSerializer
    
    def get_queryset(self):
        return My_links.objects.all()
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    