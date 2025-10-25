ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

def base62_encode(num:int)->str:
    if num == 0:
        return ALPHABET[0]
    base = len(ALPHABET)  # 62
    encoded = []
    while num > 0:
        num, rem = divmod(num, base)
        encoded.append(ALPHABET[rem])
    return "".join(reversed(encoded))

def generate_new_link():
    return