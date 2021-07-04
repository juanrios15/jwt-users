from rest_framework import serializers
from users.models import NewUser

class RegisterUserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = NewUser
        fields = ('email', 'user_name', 'password')
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        user = NewUser.objects.create_user(validated_data['email'], validated_data['password'])
        user.user_name = validated_data['user_name']
        user.save()
        return user