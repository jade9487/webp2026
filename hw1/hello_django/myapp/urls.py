from django.urls import path
from . import views

urlpatterns = [
    # 把原本的 'test/' 改成 'myhello/'
    path('myhello/', views.hello_rest_api),
]