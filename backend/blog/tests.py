from django.test import TestCase
from django.contrib.auth.models import User

from .models import Post, Category
# Create your tests here.

class Test_Create_Post(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        test_category = Category.objects.create(name="django")
        testuser1 = User.objects.create(username='test_user1', password='123456789')
        test_post = Post.objects.create(category_id=1, title="Post test title", exce="asdasdasd", content="Post content", slug="post-title", author_id=1, status="published")

    def test_blog_content(self):
        post = Post.postobjects.get(id=1)
        cat = Category.objects.get(id=1)
        author = f'{post.author}'
        exce = f'{post.exce}'
        content = f'{post.content}'
        title = f'{post.title}'
        status = f'{post.status}'
        self.assertEqual(author, 'test_user1')
        self.assertEqual(title, 'Post test title')
        self.assertEqual(content, 'Post content')
        self.assertEqual(status, 'published')
        self.assertEqual(str(post), 'Post test title')
        self.assertEqual(str(cat), 'django')