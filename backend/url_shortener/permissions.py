from rest_framework.permissions import BasePermission


class AnonimPermssion(BasePermission):
    message='Has to have session'
    
    def has_permission(self, request, view):
        if not request.session.session_key:
            request.session.create()
            request.session['alive'] = True
            request.session.save()
        return request.COOKIES