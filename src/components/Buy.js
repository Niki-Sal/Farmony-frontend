import { Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import BuyModel from '../models/buy'
import NewPost from './NewPost'
import Searchbar from './Searchbar'


const Buy = () => {

    const [posts, setPosts] = useState([])
    let style = { backgroundColor: 'white' }

    useEffect(() => {
        const fetchData = async () => {
            const res = await BuyModel.all()

            setPosts(res.data)
        };
        fetchData()
    }, []);




    const listOfPosts = posts.map((post) => {
        //TRYING TO SET POST TYPE COLORS
        if (post.postType === 'Sharing') {
            style = { border: '2px solid green', color: 'green' }
        } else {
            style = { border: '2px solid orange', color: 'orange' }
        }
        return (
            <div key={post._id} className="postDiv">
                <div className="poster-info">
                    <img className="poster-photo" src="{post.photo}" alt="Poster"></img>
                    <p className="post-stamp">{post.name}</p>
                </div>
                <h4 style={style} className="post-type">{post.postType}</h4>
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
            <div className="board-container">
            <NewPost />
            <container className="board-posts">
                <h4 className="boardDescrip">Buy and sell goods. Please be kind and respectful.</h4>
                    {/* <Searchbar posts={posts}/> */}
                <div className="postContainer">
                    {/* <button className="newpost-button"><Link to="/newpostbuy">Make New Post</Link></button> */}

                    <div className="postScroll">
                        {listOfPosts}
                    </div>
                </div>
            </container>    
            </div>
            
        </div>

    );
}

export default Buy;