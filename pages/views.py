from django.shortcuts import render, redirect
from django.contrib import auth, messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout



def index(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('index')
        else:
            messages.success(request, 'Invalid Username or Password')
            return redirect('index')
    else:
        return render(request, 'pages/index.html')


def logout_user(request):
    logout(request)
    return redirect('index')

# Timesheet
def timesheet(request):
    return render(request, 'pages/timesheet.html')

# Tools

def tools(request):
    return render(request, 'pages/tools.html')

def formulas(request):
    return render(request, 'pages/formulas.html')

def wiretable(request):
    return render(request, 'pages/wiretable.html')

# Information & Troubleshooting

def info(request):
    return render(request, 'pages/info.html')

def jetpu_info(request):
    return render(request, 'pages/jetpu_info.html')

def jetpu_tr(request):
    return render(request, 'pages/jetpu_tr.html')

def subpu_info(request):
    return render(request, 'pages/subpu_info.html')

def subpu_tr(request):
    return render(request, 'pages/subpu_tr.html')

def tanks_info(request):
    return render(request, 'pages/tanks_info.html')

def pres_info(request):
    return render(request, 'pages/pres_info.html')

def wiresizing_info(request):
    return render(request, 'pages/wiresizing_info.html')


