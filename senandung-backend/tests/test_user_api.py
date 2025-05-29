import unittest
from webtest import TestApp
from wsgiref.simple_server import make_server
from app import main

class TestUserAPI(unittest.TestCase):
    def setUp(self):
        self.app = main({})
        self.testapp = TestApp(self.app)

    def test_user_list(self):
        res = self.testapp.get('/api/users', status=200)
        self.assertEqual(res.status_code, 200)
        self.assertIn('data', res.json)

if __name__ == '__main__':
    unittest.main()