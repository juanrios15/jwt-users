import React, { useEffect, useState } from 'react';
import './Assets/css/App.css'
import Posts from './Components/Admin/Posts'
import PostLoadingComp from './Components/PostLoading'
import axiosInstance from './axios';

function App() {

  const PostLoading = PostLoadingComp(Posts);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  })
  useEffect(() => {
    axiosInstance.get('crudpost/').then((res) => {
			const allPosts = res.data;
			setAppState({ loading: false, posts: allPosts });
			console.log("res.data", res.data);
    });
  }, [setAppState])
  return (
    <div className="App">
        <h1>Latest Posts</h1>
        <PostLoading isLoading={appState.loading} posts={appState.posts}/>
    </div>
  )
}

export default App
