from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.myhello_list),
    path('add/', views.myhello_add),
    
    # 檢查有沒有下面這兩行
    path('course/list/', views.course_list),
    path('course/add/', views.course_add), # 這裡！
]