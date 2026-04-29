from django.db import models

# Lab#3 的資料表
class MyHello(models.Model):
    name = models.CharField(max_length=20)
    student_id = models.CharField(max_length=20)

    def __str__(self):
        return self.name

# HW1 的資料表
class Course(models.Model):
    course_name = models.CharField(max_length=100)
    teacher = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.course_name
