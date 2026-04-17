import uuid
from ..models import EmailVertification, PasswordVertification
from django.core.mail import send_mail
import logging 
logger = logging.getLogger(__name__)
import os

def send_email(user):
    token=str(uuid.uuid4())
    EmailVertification.objects.create(user=user,token=token)
    frontend_url = os.getenv("FRONTEND_URL", "http://127.0.0.1:5173")
    confirm_link = f"{frontend_url}/email_confirm?token={token}"
    
    try:

        send_mail(
            subject='email vertification',
            message=f'hello {user.username}, this is your link to vertification: {confirm_link}',
            from_email='noreply@url_short.com',
            recipient_list=[user.email],
            fail_silently=False
        )

    except Exception:
        logger.exception("Email sending failed")
        raise
    

def send_email_password(user):
    token=str(uuid.uuid4())
    PasswordVertification.objects.update_or_create(user=user,defaults={'token':token})
    EmailVertification.objects.create(user=user,token=token)
    frontend_url = os.getenv("FRONTEND_URL", "http://127.0.0.1:5173")
    confirm_link = f"{frontend_url}/email_confirm?token={token}"
    
    try:

        send_mail(
            subject='password change',
            message=f'hello {user.username}, this is your link to password change:{confirm_link}',
            from_email='noreply@url_short.com',
            recipient_list=[user.email],
            fail_silently=False
        )

    except Exception:
        logger.exception("Email sending failed")
        raise