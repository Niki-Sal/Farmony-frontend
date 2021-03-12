import React, { useState, useEffect } from 'react';
import BuyModel from '../models/buy'
import NewPostBuy from './NewPostBuy'

const ViewPostBuy = (props) => {
    const [post, setPost] = useState([])
    const [posts, setPosts] = useState([])

    let thisPost = props.match.params.id
    console.log(thisPost)

    useEffect(async() => {
        const res = await BuyModel.all() 
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
            <h1 className="buy">Buy</h1>
           {aPost}
        </div>
    );
}
export default ViewPostBuy;