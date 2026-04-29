from rest_framework import serializers
from .models import MyHello, Course

class MyHelloSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyHello
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'