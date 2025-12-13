import uuid
from ..models import EmailVertification
from django.core.mail import send_mail
import logging 
logger = logging.getLogger(__name__)

def send_email(user):
    token=str(uuid.uuid4())
    EmailVertification.objects.create(user=user,token=token)

    try:

        send_mail(
            subject='email vertification',
            message=f'hello, this is your link to vertification: http://127.0.0.1:5173/email_confirm?token={token}',
            from_email='noreply@url_short.com',
            recipient_list=[user.email],
            fail_silently=False
        )

    except Exception:
        logger.exception("Email sending failed")
        raise
    
    