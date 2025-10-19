import uuid
import hashlib
from rest_framework.authentication import SessionAuthentication

def generate_new_link():
    unique_id=uuid.uuid4().hex
    hash_object=hashlib.md5(unique_id.encode())
    hex_dig=hash_object.hexdigest()
    return hex_dig[:5].lower()


class CsrfExemptSessionAuthentication(SessionAuthentication):
    def enforce_csrf(self, request):
        return