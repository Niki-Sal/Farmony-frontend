import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import VolunteerModel from '../models/volunteer'


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
            <div key={post._id}>{post.title}{post.username}{post.date}<button><Link to="/viewpost/:id" id={post._id}>View Post</Link></button></div>
        )
    })

    return (
        <div>
            <h1 className="volunteer">Volunteer</h1>
            <h4>Volunteer at farms or find folks to volunteer at yours</h4>
            <button><Link to="/newpostvolunteer">Make New Post</Link></button>
            {listOfPosts}
            
        </div>
        
    );
}

export default Volunteer;