from pyramid.view import view_config
from pyramid.response import Response
import json
from ..models.database import fetch_all, fetch_one, execute_query

@view_config(route_name='user_list', renderer='json', permission='admin')
def user_list(request):
    query = "SELECT id, username, role FROM users;"
    users = fetch_all(query)(request.db)
    return {
        'data': [{'id': u[0], 'username': u[1], 'role': u[2]} for u in users]
    }

@view_config(route_name='user_detail', renderer='json', permission='admin')
def user_detail(request):
    user_id = request.matchdict['id']
    query = "SELECT id, username, role FROM users WHERE id = %s;"
    user = fetch_one(query, (user_id,))(request.db)
    if not user:
        return Response(json.dumps({'error': 'User not found'}), status=404)
    return {'data': {'id': user[0], 'username': user[1], 'role': user[2]}}

@view_config(route_name='create_user', renderer='json', request_method='POST', permission='admin')
def create_user(request):
    data = request.json_body
    query = """
    INSERT INTO users (username, password, role)
    VALUES (%s, %s, %s)
    RETURNING id;
    """
    cur = execute_query(query, (data['username'], data['password'], data.get('role', 'user')))(request.db)
    user_id = cur.fetchone()[0]
    return {'status': 'created', 'id': user_id}