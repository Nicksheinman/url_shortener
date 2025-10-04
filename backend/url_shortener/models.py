from django.db import models
from .utils import generate_new_link

class My_links(models.Model):
    sourse_link=models.CharField(max_length=300)
    new_link=models.CharField(max_length=300, default=generate_new_link)
    def __str__(self):
        return self.new_link
    

