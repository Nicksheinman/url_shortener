from django.db import models
from .utils import generate_new_link
from django.contrib.auth.models import User

class My_links(models.Model):
    sourse_link=models.CharField(max_length=300)
    new_link=models.CharField(max_length=300, default=generate_new_link)
    user=models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    def __str__(self):
        return self.new_link
    

