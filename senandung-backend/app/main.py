from pyramid.config import Configurator
import psycopg2
from functools import partial

print("Memulai aplikasi...")

def get_db(request):
    print("Menghubungkan ke database...")
    return psycopg2.connect(request.registry.settings['db.connstring'])

def main(global_config, **settings):
    print("Fungsi main() dipanggil")
    config = Configurator(settings=settings)

    # Setup DB
    config.add_request_method(partial(get_db), 'db', reify=True)

    # Setup Auth
    try:
        from .auth.basic_auth import includeme as setup_auth
        print("Memasukkan autentikasi...")
        setup_auth(config)
    except Exception as e:
        print("Error memuat auth:", e)

    # Setup Routes
    try:
        config.include('.views.user_views', route_prefix='/api')
        config.include('.views.concert_views', route_prefix='/api')
        print("Routes berhasil dimuat")
    except Exception as e:
        print("Error memuat routes:", e)

    config.scan()
    return config.make_wsgi_app()