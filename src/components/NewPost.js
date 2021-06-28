import React, { useState, useEffect } from 'react';
import HolisticModel from '../models/holistic'
import BuyModel from '../models/buy'
import VolunteerModel from '../models/volunteer'
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

const NewPost = () => {
    const [category, setCategory] = useState('Select')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [postType, setPostType] = useState('Select')
    const [categoryPostType, setCategoryPostType] = useState({ display: 'none' })
    const [currentUser, setCurrentUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {
        let token;
        if (!localStorage.getItem('jwtToken')) {
            setIsAuthenticated(false);
            console.log('====> Authenticated is now FALSE');
        } else {
            token = jwt_decode(localStorage.getItem('jwtToken'));
            setAuthToken(localStorage.getItem('jwtToken'));
            setCurrentUser(token);
        }
    }, []);
    const handleTitle = (e) => {
        setTitle(e.target.value)
        console.log('***** title', title)
    }
    const handleBody = (e) => {
        setBody(e.target.value)
        console.log('***** body', body)
    }
    const handleCategory = (e) => {
        setCategory(e.target.value)
        if (e.target.value === 'Buy' || e.target.value === 'Volunteer') {
            setCategoryPostType({ display: 'block' })
        } else {
            setCategoryPostType({ display: 'none' })
        }
    }
    const handlePostType = (e) => {
        setPostType(e.target.value)
        console.log('***** post type', postType)
    }
    const onFormSubmit = (e) => {

        
        if (category === 'Holistic Hub') {

            HolisticModel.create({
                title,
                name: currentUser.name,
                photo: currentUser.photo,
                farmer: currentUser.farmer,
                content: body,
                category,
            })
        } else if (category === 'Volunteer') {
            VolunteerModel.create({
                title,
                name: currentUser.name,
                photo: currentUser.photo,
                farmer: currentUser.farmer,
                content: body,
                postType,
                category,
            })
        } else if (category === 'Buy') {
            BuyModel.create({
                title,
                name: currentUser.name,
                photo: currentUser.photo,
                farmer: currentUser.farmer,
                content: body,
                postType,
                category,
            })
        }
        
        if (postType === 'Select') {
            e.preventDefault()
            alert('Please choose an option')
        }

        console.log(currentUser)
    }
    return (
        <div className="makeNewPost">
            <h1 className="post-title">Post a new thread</h1>
            <form className="post-form" onSubmit={onFormSubmit}>
                <label>
                    <p>Post Title: </p>
                    <input type="text" name="postTitle" value={title} onChange={handleTitle}></input>
                </label><br />
                <label>
                    <textarea type="text" rows='5' cols='80' name="body" value={body} onChange={handleBody}></textarea>
                </label><br />
                <label>
                    <p>Category: </p>
                    <select value={category} onChange={handleCategory}>
                        <option value="Select">Select</option>
                        <option value="Buy">Buy</option>
                        <option value="Volunteer">Volunteer</option>
                        <option value="Holistic Hub">Holistic Hub</option>
                    </select>
                    <div className="category-post-type" style={categoryPostType}>
                        Post Type:
                    <select value={postType} onChange={handlePostType}>
                            <option value="Select">Select</option>
                            <option value="Seeking">Seeking</option>
                            <option value="Sharing">Sharing</option>
                        </select>
                    </div>

                    <input className="new-post-submit" type="submit" value="Submit"></input>
                </label>
            </form>
        </div>
    );
}
export default NewPost;
