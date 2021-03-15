import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import VolunteerModel from '../models/volunteer'
import NewPostVolunteer from './NewPostVolunteer'


const Volunteer = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await VolunteerModel.all()
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
                    <Link to={`/viewpostvolunteer/${post._id}`}>View Post</Link>
                </button>
            </div>
        )
    })

    return (
        <div>
            <h1 className="community-title">Volunteer</h1>
            <div className="postContainer">
            <h4 className="boardDescrip">Ask for help at your garden or vounteer your time at someone else's!</h4>
                {/* <button className="newpost-button"><Link to="/newpostbuy">Make New Post</Link></button> */}
                <NewPostVolunteer />
                <div className="postScroll">
                    {listOfPosts}
                </div>
                
            </div>

        </div>

    );
}

export default Volunteer;