import React, { useState, useEffect } from 'react';
import HolisticModel from '../models/holistic'
import NewPost from './NewPost'


const ViewPost = (props) => {
    const [post, setPost] = useState([])
    const [posts, setPosts] = useState([])
    
    let thisPost = props.match.params.id
 
    useEffect(async() => {
        
        const res = await HolisticModel.all() 
        setPosts(res.data) 
       
        let onePost = res.data.filter((singlePost) => {
            return thisPost === singlePost._id
        })
        console.log(onePost)
        setPost(onePost)
        
    }, []);
    
    const aPost = post.map((post) => {
        //if (post.id === props.match.params.id)
        return (
          <div key={post.id}>
        {post.date}
        {post.name}
        {post.title}
        {post.content}
        {post.comments}
        </div>  
        )
    })
    
    return (
        <div>
           {aPost}
        </div>
        
    );
}

export default ViewPost;
