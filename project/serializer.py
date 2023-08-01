from rest_framework import serializers
from .models import details,companies

class CurdItemSerializer(serializers.ModelSerializer):
    class Meta:
        model=details
        fields='__all__'
'''
class Companies(serializers.ModelSerializer):
    class Meta:
        model=companies
        fields='__all__'''