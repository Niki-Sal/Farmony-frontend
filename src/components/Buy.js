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
            <div key={post._id}>{post.title}{post.username}{post.date}<button><Link to="/viewpostbuy/:id" id={post._id}>View Post</Link></button></div>
        )
    })

    return (
        <div>
            <h1>Buy</h1>
            <h4>Sell and Buy Goods </h4>
            <button><Link to="/newpostbuy">Make New Post</Link></button>
            {listOfPosts}
            
        </div>
        
    );
}

export default Buy;