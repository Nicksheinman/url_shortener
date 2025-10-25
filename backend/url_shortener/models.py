from django.db import models, transaction
from .utils import base62_encode
from django.contrib.auth.models import User

class My_links(models.Model):
    sourse_link=models.CharField(max_length=300)
    new_link=models.CharField(max_length=300)
    user=models.ForeignKey(User, on_delete=models.CASCADE, default=1,null=True, blank=True)
    def __str__(self):
        return self.new_link
    def save(self, *args, **kwargs):
        is_new=self._state.adding and not self.new_link
        if is_new:
            with transaction.atomic():
                super().save(*args, **kwargs)
                self.new_link=base62_encode(self.id)
                super().save(update_fields=['new_link'])
        else:
            super().save(*args,**kwargs)
    
class Anonim_link(models.Model):
    sourse_link=models.CharField(max_length=300)
    new_link=models.CharField(max_length=300)
    
    expires_at=models.DateTimeField(db_index=True, null=False)
    session_key=models.CharField(max_length=40, db_index=True, unique=True)
    def __str__(self):
        return self.new_link
    def save(self, *args, **kwargs):
        is_new=self._state.adding and not self.new_link
        if is_new:
            with transaction.atomic():
                super().save(*args, **kwargs)
                self.new_link=base62_encode(self.id)
                super().save(update_fields=['new_link'])
        else:
            super().save(*args,**kwargs)
