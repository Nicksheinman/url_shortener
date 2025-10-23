from rest_framework.permissions import BasePermission


class AnonimPermssion(BasePermission):
    message='Has to have session'
    
    def has_permission(self, request, view):
        return bool(request.session.session_key)