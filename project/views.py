from django.shortcuts import render

# Create your views here.

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import CurdItemSerializer#,Companies
#from .models import companies

@api_view(['POST'])
def index(request):
    if request.method=='POST':
        serializer=CurdItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
    return Response(serializer.errors,status=400)
'''
model.objects not working...
@api_view(['GET'])
def companies(request):
    if request.method=='GET':
        items =companies.objects.all()
        serializer=Companies(items,many=True)
        return Response(serializer.data)'''