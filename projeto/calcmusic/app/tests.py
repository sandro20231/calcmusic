from django.test import TestCase, Client
from .models import Comentarios
from django.contrib.auth.models import User


# Create your tests here.
class TestesMusicais(TestCase):

    def setUp(self):
        pass

    def test_index(self):
        c= Client()
        resposta = c.get("/calculadora/")
        self.assertEqual(resposta.status_code, 200)