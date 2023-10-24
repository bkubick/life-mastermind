# coding: utf-8

from __future__ import annotations

import typing

from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.validators import UniqueValidator


class RegisterSerializer(serializers.ModelSerializer):
    """ Serializer for registering a new user.

        Attributes:
            email (EmailField): The email of the user.
            password (CharField): The password of the user.
            first_name (CharField): The first name of the user.
            last_name (CharField): The last name of the user.
    """
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())])

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])

    class Meta:
        model = User
        fields = ('email', 'password', 'first_name', 'last_name')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True},
            'password': {'write_only': True},
        }

    def create(self, validated_data: typing.Dict[str, typing.Any]) -> User:
        """ Registers a new user.

            Args:
                validated_data (Dict): A dictionary with the validated data.
            
            Returns:
                (User): The created user (with the password hashed).
        """
        user = User.objects.create(
            username=validated_data['email'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['email', 'first_name', 'last_name']
