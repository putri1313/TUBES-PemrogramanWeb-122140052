from setuptools import setup, find_packages

setup(
    name='senandung-backend',  # Nama proyek (sesuaikan jika perlu)
    version='0.1',
    packages=find_packages(),  # Otomatis mencari folder Python
    install_requires=[
        'pyramid',
        'psycopg2-binary',
        'waitress',
        'webtest',     # Untuk testing
        'coverage'     # Untuk coverage test
    ],
    entry_points="""\
    [paste.app_factory]
    main = app:main
    """,
)