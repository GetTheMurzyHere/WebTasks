"""
Definition of urls for DjangoWebTask.
"""

from django.conf.urls import url
import django.contrib.auth.views

import app.forms
import app.views

urlpatterns = [
    url(r'^$', app.views.home, name='home'),
    url(r'^poem2.1$', app.views.contact, name='contact'),
    url(r'^about2.1$', app.views.about, name='about'),
    url(r'^main_old$', app.views.main_old, name='main_old'),
    url(r'^poem_old$', app.views.poem_old, name='poem_old'),
    url(r'^about_old$', app.views.about_old, name='about_old'),
]
