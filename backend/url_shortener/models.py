from django.db import models
from .utils import generate_new_link
from django.contrib.auth.models import User

class My_links(models.Model):
    sourse_link=models.CharField(max_length=300)
    new_link=models.CharField(max_length=300, default=generate_new_link)
    user=models.ForeignKey(User, on_delete=models.CASCADE, default=1,null=True, blank=True)
    def __str__(self):
        return self.new_link
    
class Anonim_link(models.Model):
    sourse_link=models.CharField(max_length=300)
    new_link=models.CharField(max_length=300, default=generate_new_link)
    
    expires_at=models.DateTimeField(db_index=True, null=False)
    session_key=models.CharField(max_length=40, db_index=True, unique=True)
    def __str__(self):
        return self.new_link
