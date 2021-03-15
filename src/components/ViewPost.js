import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import HolisticModel from '../models/holistic'
const ViewPost = (props) => {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [content, setContent] = useState("")
    const [name, setName] = useState("")
    let thisPostId = props.match.params.id
    useEffect(async() => {
        console.log(thisPostId)
        const holisticPosts = await HolisticModel.all()
        let temppost = holisticPosts.data.filter((eachPost) => {
            return thisPostId === eachPost._id
        })
        setPost(temppost[0])
        console.log(temppost[0])
        setComments(temppost[0].comment)
        console.log(temppost[0].comment)
    }, []);
    const thisPostComments = comments.map((comment)=>{
        return(
        <div className="comments">
            <h3>-{comment.name}</h3>
            <p>{comment.data}</p>
            <p>{comment.content}</p>
        </div>
        )
    })
    const handleCommentContent = (event) =>{
        setContent(event.target.value)
        console.log(event.target.value)
    }
    const handleName = (event) =>{
        setName(event.target.value)
        console.log(event.target.value)
    }
    const updatePost = async (postId, newComment) => {
        const result = await HolisticModel.update(postId, newComment)
      }
    const onFormSubmit = async(e) =>{
        const newComment= {
            name: name,
            content: content,
            date: Date()
        }
        console.log(newComment)
        comments.push(newComment)
        console.log(comments)
        updatePost(post._id, {comment: comments})
        console.log(post)
    }
    return (
        <div>
        <Link to='/holistichub'>&larr;Back holistic Community Board</Link>
        <div className="view-post">
            <h3>Post Title: {post.title}</h3>
            <h5 className="no-margin">By: {post.name}</h5>
        </div>
        <p className="post-content">{post.content}</p>
        <div>
            <h5 className="comment-title">Comments</h5>
            <p>{thisPostComments} </p>
        </div>
        <form onSubmit={onFormSubmit} className= "comment-form">
            <label htmlFor="content">Your Name</label>
            <input type="text" id="content" value ={name} placeholder="your name" onChange={handleName} />
            <label htmlFor="content">Post a comment</label>
            <textarea 
            onChange={handleCommentContent}
            id="content" rows= '5' cols='80'
            value={content}
            placeholder="post a comment to this post">
            </textarea> 
            <button type="submit" >Post</button>
        </form>
    </div>
    );
}
export default ViewPost;

