import React, { useState, useEffect } from 'react';
import VolunteerModel from '../models/volunteer'
import NewPostVolunteer from './NewPostVolunteer'

const ViewPostVolunteer = (props) => {
    const [post, setPost] = useState([])
    const [posts, setPosts] = useState([])

    let thisPost = props.match.params.id
    console.log(thisPost)

    useEffect(async() => {
        const res = await VolunteerModel.all() 
        setPosts(res.data) 
        console.log('********** RES ===>', res)
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
export default ViewPostVolunteer;