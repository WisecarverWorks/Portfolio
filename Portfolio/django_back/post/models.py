from django.db import models
#from authentication.models import User
# Create your models here.

class Post(models.Model):
    #user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    year = models.IntegerField()
    content = models.TextField()
    image = models.ImageField(upload_to='post_images')

    def __str__(self):
        return self.title
