from django.contrib.auth import get_user_model

User = get_user_model()

from rest_framework.response import Response
from  rest_framework.views import APIView
from  rest_framework import  permissions


class SignUpView(APIView):
    permission_classes=(permissions.AllowAny,)

    def post(self,request,format=None):
        data = self.request.data

        name = data['name']
        email = data['email']
        password = data['password']
        password2 = data['password2']

        if password2==password:
            if User.objects.filter(email=email).exists():
                return Response({'error':"Email alredy exists"})
            else:
                if len(password)<6:
                    return Response({'error':"Password mus be at least 6 characters"})
                else:
                    user = User.objects.create_user(email=email,password=password,name=name)
                    user.save()
                    return Response({'success':"User created successfully"})


        else:
            return Response({'error':"Passwords don't match"})