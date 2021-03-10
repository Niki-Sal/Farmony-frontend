import React, { useState, useEffect } from 'react';
import HolisticModel from '../models/holistic'


const ViewPost = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await HolisticModel.all()
            console.log(res.data) 
            setPosts(res.data) 
        };
        fetchData()
    }, []);
    
    const listOfPosts = posts.map((post) => {
        <div key={post.id}>
        {post.date}
        {post.username}
        {post.title}
        {post.content}
        {post.comments}
        
        </div>
    })

    return (
        <div>
           {listOfPosts}
        </div>
        
    );
}

export default ViewPost;
