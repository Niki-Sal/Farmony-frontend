import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import NewPost from './NewPost'
import ViewPost from './ViewPost'
import HolisticModel from '../models/holistic'


const Holistic = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
           const res = await HolisticModel.all()
           //console.log(res)
           setPosts(res.data)
        };
        fetchData()
    }, []);

    const listOfPosts = posts.map((post) => {
        return (
            <div key={post._id}>{post.title}{post.name}{post.date}<button><Link to="/post/:id">View Post</Link></button></div>
        )
    })

    return (
        <div>
            <h1>Holistic Hub</h1>
            <h4>Community chit-chat. Discuss community news, trade recipes, share photos, etc. Be kind and respectful. </h4>
            <button><Link to="/newpost">Make New Post</Link></button>
            {listOfPosts}
            
        </div>
        
    );
}

export default Holistic;