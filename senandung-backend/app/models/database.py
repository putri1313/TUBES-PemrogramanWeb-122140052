def fetch_all(query, params=None):
    def wrapper(conn):
        with conn.cursor() as cur:
            cur.execute(query, params or ())
            result = cur.fetchall()
            return result
    return wrapper

def fetch_one(query, params=None):
    def wrapper(conn):
        with conn.cursor() as cur:
            cur.execute(query, params or ())
            result = cur.fetchone()
            return result
    return wrapper

def execute_query(query, params=None):
    def wrapper(conn):
        with conn.cursor() as cur:
            cur.execute(query, params or ())
            conn.commit()
            return cur
    return wrapper