import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import BuyModel from '../models/buy'
import NewPostBuy from './NewPostBuy'


const Buy = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await BuyModel.all()
            console.log(res)
            setPosts(res.data)
        };
        fetchData()
    }, []);

    const listOfPosts = posts.map((post) => {
        return (
            <div key={post._id} className="postDiv">
                <h3>{post.title} </h3>
                <h4>{post.date.slice(0, 10)} by {post.name} at {post.date.slice(11, 16)} </h4>
                <button className="communityButton">
                    <Link to={`/viewpostbuy/${post._id}`}>View Post</Link>
                </button>
            </div>
        )
    })

    return (
        <div>
            <h1 className="heading-sm">Buy and Sell goods. Please be kind and respectful.</h1>
            <div className="board-container">
                <h3 className="heading-noback">Recent Posts in this board</h3>
                <div className="postScroll">
                    {listOfPosts}
                </div>
                <NewPostBuy />
            </div>
            
        </div>

    );
}

export default Buy;