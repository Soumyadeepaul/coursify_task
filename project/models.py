from django.db import models

# Create your models here.
class details(models.Model):
    name=models.TextField(max_length=255)
    email = models.TextField(max_length=255)
    password = models.TextField(max_length=255)
    college = models.TextField(max_length=255)
    cgp = models.TextField(max_length=255)
    domain=models.TextField(max_length=255)


class companies(models.Model):
    url=models.TextField(max_length=255)
    objects=models.Manager()
    def __str__(self):
        return f"{self.url}"
