# coding: utf-8

from __future__ import annotations

from typing import Optional, TYPE_CHECKING

from django.contrib.auth.models import User
from rest_framework import permissions
from rest_framework import status
from rest_framework import viewsets, mixins
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from . import serializers


if TYPE_CHECKING:
    from rest_framework.request import Request


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = [permissions.AllowAny]

    def retrieve(self, request: Request, pk: Optional[int] = None) -> Response:
        item = get_object_or_404(self.queryset, pk=pk)
        serializer = self.serializer_class(item, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)


class RegisterView(mixins.CreateModelMixin, viewsets.GenericViewSet):
    """ API endpoint that registers a new user."""
    queryset = User.objects.all()
    serializer_class = serializers.RegisterSerializer
    permission_classes = [permissions.AllowAny]
