import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import BuyModel from '../models/buy'


const Buy = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
           const res = await BuyModel.all()
           console.log(res)
           setPosts(res.data)
        };
        fetchData()
    }, []);

    const listOfPosts = posts.map((post) => {
        return (
            <div key={post._id} className="post-container">
                <h4>{post.title} </h4>
                <h6>{post.date} by {post.name} </h6>
                <button><Link to={`/viewpostbuy/${post._id}`}>View Post</Link></button>
            </div>
        )
    })

    return (
        <div>
            <h1 className="community-title">Buy</h1>
            <button className="newpost-button"><Link to="/newpostbuy">Make New Post</Link></button>
            {listOfPosts} 
        </div>
        
    );
}

export default Buy;