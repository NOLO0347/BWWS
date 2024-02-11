from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),

    # Authentication

   
    path('logout', views.logout_user, name='logout'),

    # Timesheet

    path('timesheet', views.timesheet, name='timesheet'),

    # Tools

    path('tools', views.tools, name='tools'),
    path('formulas', views.formulas, name='formulas'),
    path('wiretable', views.wiretable, name='wiretable'),

    # Information & Troubleshooting
    
    path('info', views.info, name='info'),
    path('jetpu_info', views.jetpu_info, name='jetpu_info'),
    path('jetpu_tr', views.jetpu_tr, name='jetpu_tr'),
    path('subpu_info', views.subpu_info, name='subpu_info'),
    path('subpu_tr', views.subpu_tr, name='subpu_tr'),
    path('tanks_info', views.tanks_info, name='tanks_info'),
    path('pres_info', views.pres_info, name='pres_info'),
    path('wiresizing_info', views.wiresizing_info, name='wiresizing_info'),
    
]