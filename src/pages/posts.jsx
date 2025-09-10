import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Posts = () => {
    const [posts , setPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts= async()=>{
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(res.data);
        }
        fetchPosts();

    },[])
    return ( 
        <>
            <h1>Posts</h1>
            <ul>
                {posts.map(p=>(
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </>
        

    );
}
 
export default Posts;