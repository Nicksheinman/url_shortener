from rest_framework import serializers
from .models import My_links, Anonim_link
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model=My_links
        fields=['id', 'user', 'sourse_link', 'new_link']
        read_only_fields=['id', 'user', 'new_link']
        
class AnonimLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model=Anonim_link
        fields=['sourse_link', 'new_link']
        read_only_fields=['new_link']

    
class RegisterSerializer(serializers.Serializer):
    username=serializers.CharField()
    password=serializers.CharField(write_only=True)
    second_password=serializers.CharField(write_only=True)
    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("username exist")
        return value
    def validate(self, attrs):
        if attrs['password']!=attrs['second_password']:
            raise serializers.ValidationError('password do not match')
        return attrs
    def create(self, validated_data):
        validated_data.pop('second_password')
        user=User(username=validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()
        return user
    
class LoginSerializer(serializers.Serializer):
    username=serializers.CharField()
    password=serializers.CharField(write_only=True)
    def validate(self, attrs):
        print(attrs)
        user=authenticate(
            request=self.context.get('request'),
            username=attrs['username'],
            password=attrs['password'],
        )
        if not user:
            raise serializers.ValidationError("user do not exist")
        attrs['user']=user
        return attrs

