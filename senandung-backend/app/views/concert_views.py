from pyramid.view import view_config
from pyramid.response import Response
import json
from ..models.database import fetch_all, fetch_one, execute_query

@view_config(route_name='concert_list', renderer='json', permission='view')
def concert_list(request):
    query = "SELECT id, title, date, location, description, ticket_price, ticket_quantity FROM concerts;"
    concerts = fetch_all(query)(request.db)
    return {
        'data': [{
            'id': c[0],
            'title': c[1],
            'date': str(c[2]),
            'location': c[3],
            'description': c[4],
            'ticket_price': float(c[5]),
            'ticket_quantity': c[6]
        } for c in concerts]
    }

@view_config(route_name='concert_detail', renderer='json', permission='view')
def concert_detail(request):
    concert_id = request.matchdict['id']
    query = "SELECT * FROM concerts WHERE id = %s;"
    concert = fetch_one(query, (concert_id,))(request.db)
    if not concert:
        return Response(json.dumps({'error': 'Concert not found'}), status=404)
    return {
        'data': {
            'id': concert[0],
            'title': concert[1],
            'date': str(concert[2]),
            'location': concert[3],
            'description': concert[4],
            'ticket_price': float(concert[5]),
            'ticket_quantity': concert[6]
        }
    }

@view_config(route_name='create_concert', renderer='json', request_method='POST', permission='admin')
def create_concert(request):
    data = request.json_body
    query = """
    INSERT INTO concerts (title, date, location, description, ticket_price, ticket_quantity)
    VALUES (%s, %s, %s, %s, %s, %s)
    RETURNING id;
    """
    cur = execute_query(query, (
        data['title'],
        data['date'],
        data['location'],
        data.get('description'),
        data['ticket_price'],
        data['ticket_quantity']
    ))(request.db)
    concert_id = cur.fetchone()[0]
    return {'status': 'created', 'id': concert_id}