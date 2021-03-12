import React, { useState, useEffect } from 'react';
import HolisticModel from '../models/holistic'
import NewPost from './NewPost'
import Comments from './Comments'


const ViewPost = (props) => {
    const [post, setPost] = useState([])
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    
    let thisPost = props.match.params.id
 
    useEffect(async () => {
        
        const res = await HolisticModel.all() 
        setPosts(res.data) 
       
        let onePost = await res.data.filter((singlePost) => {
            return thisPost === singlePost._id
        })

        let commentArray = await onePost[0].comment
        console.log('************* ====> One Post', onePost)
        console.log('************* ====> One Post', commentArray)
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
           {aComment}
           <Comments id={ post.length > 0 ? post[0]._id : '' } />
        </div>
        
    );
}
export default ViewPost;