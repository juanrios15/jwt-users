import datetime

from django.db import models
from django.conf import settings
from django.utils import timezone
from django.template.defaultfilters import slugify
# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
    
class Post(models.Model):
    
    class PostObjects(models.Manager):
        
        def get_queryset(self):

            return super().get_queryset().filter(status='published')
    
    options = (
        ('draft', 'Draft'),
        ('published','Published')
    )
    
    category = models.ForeignKey(Category, on_delete=models.PROTECT,default=1)
    title = models.CharField(max_length=250)
    exce = models.TextField(null=True)
    content = models.TextField()
    slug = models.SlugField(max_length=250, unique_for_date='published', blank=True, null=True)
    published = models.DateTimeField(default=timezone.now, auto_now=False, auto_now_add=False)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='blog_posts')
    status = models.CharField(max_length=10, choices=options, default='published')
    objects = models.Manager() # Default manager
    postobjects = PostObjects() # custom manager
    
    def save(self,*args, **kwargs):
        
        if not self.slug:
            now = datetime.datetime.now()
            total_time = datetime.timedelta(
                hours=now.hour,
                minutes=now.minute,
                seconds=now.second
            )
            seconds = int(total_time.total_seconds())
            slug_unique = '%s-%s-%s' % (self.title,self.author.user_name, str(seconds))
            self.slug = slugify(slug_unique)
            
        super(Post,self).save(*args, **kwargs)
    
    class Meta: 
        ordering = ('-published',)
        
    
    def __str__(self):
        return self.title
    