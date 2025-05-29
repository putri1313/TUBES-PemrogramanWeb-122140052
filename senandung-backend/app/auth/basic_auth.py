from base64 import b64decode
from pyramid.authentication import CallbackAuthenticationPolicy

def basic_auth_check(credentials, request):
    try:
        decoded = b64decode(credentials).decode('utf-8')
        username, password = decoded.split(':', 1)
        query = "SELECT role FROM users WHERE username = %s AND password = %s;"
        cursor = request.db.cursor()
        cursor.execute(query, (username, password))
        result = cursor.fetchone()
        if result:
            return ['group:' + result[0]]
    except Exception:
        pass
    return None

def includeme(config):
    policy = CallbackAuthenticationPolicy(callback=basic_auth_check, realm='Senandung.id')
    config.set_authentication_policy(policy)
    config.set_authorization_policy(None)