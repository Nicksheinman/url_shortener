from rest_framework import serializers
from .models import My_links
from django.contrib.auth.models import User


class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model=My_links
        fields=['id', 'user', 'sourse_link', 'new_link']
        read_only_fields=['id', 'user', 'new_link']