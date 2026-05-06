from django.contrib import admin
from .models import MyHello # 這是你定義在 models.py 的類別

# 第一種：簡單註冊 (只會顯示 MyHello object)
# admin.site.register(MyHello) 

# 第二種：進階註冊 (會像講義一樣顯示名字和學號表格)
@admin.register(MyHello)
class MyHelloAdmin(admin.ModelAdmin):
    list_display = ('name', 'student_id') # 讓表格顯示這兩欄