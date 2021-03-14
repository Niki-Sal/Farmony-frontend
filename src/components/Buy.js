import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import BuyModel from '../models/buy'
import NewPostBuy from './NewPostBuy'


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
                <h3>{post.title} </h3>
                <h4>{post.date.slice(0,10)} by {post.name} at {post.date.slice(11, 16)} </h4>
                <button><Link to={`/viewpostbuy/${post._id}`}>View Post</Link></button>
            </div>
        )
    })

    return (
        <div>
            <h1 className="community-title">Buy</h1>
            {/* <button className="newpost-button"><Link to="/newpostbuy">Make New Post</Link></button> */}
            <div className="post-back">
                {listOfPosts} 
            </div>
            <NewPostBuy />
        </div>
        
    );
}

export default Buy;