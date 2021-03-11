import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import NewPost from './NewPost'
import ViewPost from './ViewPost'
import TradeModel from '../models/trade'


const Trade = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
           const res = await TradeModel.all()
           //console.log(res)
           setPosts(res.data)
        };
        fetchData()
    }, []);

    const listOfPosts = posts.map((post) => {
        return (
            <div key={post._id}>{post.title}{post.name}{post.date}<button><Link to={`/post/${post._id}`}>View Post</Link></button></div>
        )
    })

    return (
        <div>
            <h1>Trade</h1>
            <h4>Trade. Be kind and respectful. </h4>
            <button><Link to="/newpost">Make New Post</Link></button>
            {listOfPosts}
            
        </div>
        
    );
}

export default Trade;