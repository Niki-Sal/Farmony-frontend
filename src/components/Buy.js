import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import BuyModel from '../models/buy'
import NewPost from './NewPost'


const Buy = () => {

    const [posts, setPosts] = useState([])
    const [postType, setPostType] = useState({ backgroundColor: 'white' })

    useEffect(() => {
        const fetchData = async () => {
            const res = await BuyModel.all()
            console.log(res)
            setPosts(res.data)
        };
        fetchData()
    }, []);

    const listOfPosts = posts.map((post) => {
        //TRYING SO SET POST TYPE COLORS
        // if (postType == 'Sharing') {
        //     setPostType({backgroundColor: 'green'})
        // } else {
        //     setPostType({backgroundColor: 'orange'})
        // }
        return (
            <div key={post._id} className="postDiv">
                <div className="poster-info">
                    <img src="{post.photo}" alt="profile photo"></img>
                    <p className="post-stamp">{post.name}</p>
                </div>
                <h4 style={postType} className="post-type">{post.postType}</h4>
                <h3>{post.title} </h3>
                <h4 className="post-stamp"> <br /> {post.date.slice(0, 10)}  <br /> {post.date.slice(11, 16)}</h4>
                <button className="communityButton">
                    <Link to={`/viewpostbuy/${post._id}`}>View Post</Link>
                </button>
            </div>
        )
    })

    return (
        <div>
            <h1 className="board-title">Buy</h1>
            <h4 className="boardDescrip">Buy and sell goods. Please be kind and respectful.</h4>
            <div className="postContainer">
                {/* <button className="newpost-button"><Link to="/newpostbuy">Make New Post</Link></button> */}

                <NewPost />
                <div className="postScroll">
                    {listOfPosts}
                </div>
            </div>

        </div>

    );
}

export default Buy;