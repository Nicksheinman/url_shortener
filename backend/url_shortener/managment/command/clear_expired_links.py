from url_shortener.models import Anonim_link
from django.core.management.base import BaseCommand
from django.utils import timezone

class Command(BaseCommand):
    
    
    def handle(self, *args, **options):
        expired=Anonim_link.objects.filter(expires_at=timezone.now)
        count, _=expired.delete()
        self.stdout.write(self.style.SUCCESS(f"Deleted {count} expired links"))