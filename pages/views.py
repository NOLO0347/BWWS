from django.shortcuts import render



def index(request):
    return render(request, 'pages/index.html')

# Authentication

def login(request):
    return render(request, 'pages/login.html')

def logout(request):
    return render(request, 'pages/logout.html')

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


