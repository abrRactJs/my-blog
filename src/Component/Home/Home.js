import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Home.css'

const Home = () => {
    const [post, setPost] = useState([]);

    useEffect(()=>{
          const url = `https://dummyjson.com/posts`;
          fetch(url)
          .then( res => res.json())
          .then( data => setPost(data.posts))
    },[])

    return (
        <div className='home'>
            {
                post.map(post => <Post post={post} key={post.id}></Post>)
            }
        </div>
    );
};

export default Home;