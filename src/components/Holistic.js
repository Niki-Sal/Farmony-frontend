import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import NewPost from './NewPost'
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
    console.log(posts)
    const listOfPosts = posts.map((post) => {
        return (
        
            <div key={post._id} className="postDiv">
                <h3>{post.title} </h3>
                <h4>{post.date.slice(0, 10)} by {post.name} at {post.date.slice(11, 16)} </h4>
                <button className="communityButton">
                    <Link to={`/post/${post._id}`}>View Post</Link>
                </button>
            </div>
            )
    })

    return (
        <div>
            <h1 className="community-title">Holistic Hub</h1>
            <div className="postContainer">
                
                <h4 className="boardDescrip">Community chit-chat. Discuss community news, trade recipes, share photos, etc. Please be kind and respectful. </h4>
                <NewPost />
                <div className="postScroll">
                    {listOfPosts}     
                </div>
                
                
            </div>
        </div>
        
    );
}

export default Holistic;