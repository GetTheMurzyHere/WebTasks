"""
Definition of views.
"""

from django.shortcuts import render
from django.http import HttpRequest
from django.template import RequestContext
from datetime import datetime

def home(request):
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/index.html',
        {
            'title':'Main',
        }
    )

def contact(request):
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/poem.html',
        {
            'title':'Poem',
        }
    )

def about(request):
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/about.html',
        {
            'title':'About',
        }
    )

def main_old(request):
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/main_old.html',
        {
            'title':'Главная 1.3',
        }
    )

def poem_old(request):
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/poem_old.html',
        {
            'title':'Стих 1.1',
        }
    )

def about_old(request):
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/about_old.html',
        {
            'title':'О себе 1.2',
        }
    )