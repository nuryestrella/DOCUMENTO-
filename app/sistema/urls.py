from django.conf.urls import url
from.views import index,sumando,divisor
urlpatterns = [
    url(r'^$', index),
    url(r'^suma$', sumando),
    url(r'^div$', divisor),

]
