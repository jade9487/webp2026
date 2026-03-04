from django.http import HttpResponse

def hello_api(request):
    return HttpResponse("Hello CGU")
