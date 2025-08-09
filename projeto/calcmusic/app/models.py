from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Comentarios(models.Model):
    titulo = models.CharField(max_length=64)
    autor = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="autor")
    texto = models.CharField(max_length=1000)

    def __str__(self):
        return f"{self.id} - {self.titulo}/{self.autor}"
