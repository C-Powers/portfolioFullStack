from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect

# Create your views here.

def baseSite(request):
    return render(request, 'portfolio/base.html', {})
