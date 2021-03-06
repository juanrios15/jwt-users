import React, { useEffect, useState } from 'react';
import './Assets/css/App.css'
import Posts from './Components/Posts/Posts'
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



// Using fetch:
// import React, { Component } from 'react'

// export default class connectionExample extends Component {

//   componentDidMount() {
//     const apiUrl = 'http://127.0.0.1:8000/api/';
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//   }

//   render() {
//     return (
//       <div>
//         Example Connection
//       </div>
//     )
//   }
// }

