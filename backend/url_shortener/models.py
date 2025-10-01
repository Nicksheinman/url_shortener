from django.db import models


class My_links(models.Model):
    sourse_link=models.CharField(max_length=300)
    new_link=models.CharField(max_length=300)

