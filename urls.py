from django.conf.urls import patterns, include, url
from zombie.apps.login.views import home

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'zombie.apps.login.views.home', name='home'),
    url(r'^playoption/$', 'zombie.apps.login.views.playoption', name='playoption'),
    url(r'^sign-up/$', 'zombie.apps.login.views.signUp', name='sign-up'),
    url(r'^login/$', 'zombie.apps.login.views.signIn', name='signIn'),
    url(r'^success/$', 'zombie.apps.login.views.success', name='success'),
    url(r'^admin/', include(admin.site.urls)),
)
