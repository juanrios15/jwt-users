from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient, APITestCase
from django.contrib.auth.models import User

from blog.models import Post, Category

# Create your tests here.


class PostTests(APITestCase):
    
    def test_view_posts(self):
        
        url = reverse('blog_api:listcreate')
        response = self.client.get(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    def create_post(self):
        
        self.test_category = Category.objects.create(name="django")
        self.testuser1 = User.objects.create_superuser(username="test_user1", password="123456789")
        self.client.login(username=self.testuser1.username, password='123456789')
        
        data = {"title":"new", "author": 1, "exce": "new","content":"new"}
        url = reverse('blog_api:listcreate')
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
                
    
    def test_post_update(self):
        client = APIClient()
        self.test_category = Category.objects.create(name="django")
        self.testuser1 = User.objects.create_user(username="test_user1", password="123456789")
        self.testuser2 = User.objects.create_user(username="test_user2", password="123456789")
        test_post = Post.objects.create(category_id=1, title="Post test title", exce="asdasdasd", content="Post content", slug="post-title", author_id=1, status="published")
        client.login(username=self.testuser1.username, password="123456789")
        
        
        root = reverse(('blog_api:detailcreate'), kwargs={'pk': 1})
        response = client.put(root, {
            "id": 1,
            "title": "modificado",
            "author": 1,
            "exce": "modificado",
            "content": "modificado",
            "status": "published"
        }, format="json")
        print(response.data)
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        