from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

# Create your views here.

# códigos inciais de autenticação


def index(request):
    if not request.user.is_authenticated:
        return HttpResponseRedirect(reverse('login'))
    return render(request, "app/index.html")


def login_v(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)

        if user:
            login(request, user)
            return HttpResponseRedirect(reverse('index'))
        return render(request, "app/login.html", {"erro": "Usuário ou senha invalidos"})
    return render(request, "app/login.html")


def logout_v(request):
    logout(request)
    return render(request, "app/login.html", {"erro": "Usuário não logado"})


def calculadora(request):
    return render(request, "app/calculadora.html")
