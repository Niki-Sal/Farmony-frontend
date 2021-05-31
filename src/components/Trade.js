import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import TradeModel from '../models/trade'
import NewPost from './NewPost';



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
            <div key={post._id} className="postDiv">
                {post.title}
                {post.name}
                {post.date}
                {post.postType}
                <button className="communityButton">
                    <Link to={`/viewposttrade/${post._id}`}>View Post</Link>
                </button>
            
            </div>
        )
    })

    return (
        <div>
            <h1 className="trade">Trade</h1>
            <div className="postContainer">
            <h4 className="boardDescrip">Trade amongst one another. No money necesary! Please be kind and respectful. </h4>
            <p>Make New Post</p>
            <NewPost />
            <div className="postScroll">
                {listOfPosts}    
            </div>
            
            
            </div>
        </div>
        
    );
}

export default Trade;