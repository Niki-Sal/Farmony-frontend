import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import TradeModel from '../models/trade'



const Trade = () => {
    //Setting state to save and display posts
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
            <div key={post._id}>
                {post.title}
                {post.name}
                {post.date}
                {post.postType}
                <button>
                    <Link to={`/viewposttrade/${post._id}`}>View Post</Link>
                </button>
            
            </div>
        )
    })

    return (
        <div>
            <h1 className="trade">Trade</h1>
            <h4>Trade. Be kind and respectful. </h4>
            <button><Link to="/newposttrade">Make New Post</Link></button>
            {listOfPosts}
            
        </div>
        
    );
}

export default Trade;