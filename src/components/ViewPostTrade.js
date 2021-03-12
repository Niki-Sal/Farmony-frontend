import React, { useState, useEffect } from 'react';
import TradeModel from '../models/trade'
import NewPostTrade from './NewPostTrade'
import Comments from './Comments'



const ViewPostTrade = (props) => {
    const [post, setPost] = useState([])
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    
    let thisPost = props.match.params.id
    console.log(thisPost)

    useEffect(async() => {
        
        const res = await TradeModel.all() 
        setPosts(res.data) 
        console.log('********** RES ===>', res)
        let onePost = res.data.filter((singlePost) => {
            return thisPost === singlePost._id
        })
        
        let commentArray = await onePost[0].comment
        console.log(onePost)
        setPost(onePost)
        setComments(commentArray)
        
    }, []);
    
    const aPost = post.map((post) => {
        //if (post.id === props.match.params.id)
        return (
          <div key={post.id}>
        {post.date}
        {post.name}
        {post.title}
        {post.content}
        </div>  
        )
    })
    console.log(comments)
    const aComment = comments.map((comment) => {
        return(
           <div key={comment._id}>
        {comment.name}
        {comment.date}    
        {comment.content}    
        </div> 
        )
    })
    
    return (
        <div>
           {aPost}
           <h4>Comments</h4>
           {/* {aComment} */}
        <Comments post={ post.length > 0 ? post[0] : '' }/>
        </div>
    );
}

export default ViewPostTrade;
