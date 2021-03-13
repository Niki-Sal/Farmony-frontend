import React, { useState, useEffect } from 'react';
import TradeModel from '../models/trade'
import NewPostTrade from './NewPostTrade'
import Comments from './Comments'



const ViewPostTrade = (props) => {
    const [post, setPost] = useState({})
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
        
        
        console.log(onePost[0])
        setPost(onePost[0])
        setComments(onePost[0].comment)
        
        
    }, []);
    
    // const aPost = post.map((post) => {
    //     //if (post.id === props.match.params.id)
    //     return (
    //       <div key={post.id}>
    //     {post.date}
    //     {post.name}
    //     {post.title}
    //     {post.content}
    //     </div>  
    //     )
    // })
    let commentsList;
     if (comments) {
          commentsList = comments.map((comment) => {
           return(
              <div key={comment._id}>
           {comment.name}
           {comment.date}    
           {comment.content}    
           </div> 
           )
       })
    }
    
    return (
        <div>
        {post.date}
        {post.name}
        {post.title}
        {post.content}
           <h4>Comments</h4>
           {commentsList}
            <Comments post={ post }/>
        </div>
    );
}

export default ViewPostTrade;
