from django.shortcuts import render
from django.http import HttpResponse,JsonResponse

def welcomePage(request):
    return render(request,'index.html')