import React, { useState, useEffect } from 'react';
import HolisticModel from '../models/holistic'


const ViewPost = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await HolisticModel.all()
            console.log(res.data) 
            //setPosts(res.data[0]) 
        };
        fetchData()
    }, []);
    
    console.log(props.id)

    return (
        <div>
            <p>post {posts}{props.id}</p>
        </div>
    );
}

export default ViewPost;
