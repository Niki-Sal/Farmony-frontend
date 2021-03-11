import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import VolunteerModel from '../models/volunteer'


const NewPostVolunteer = () => {
    const [category, setCategory] = useState(null)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [postType, setPostType] = useState(null)
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
        console.log('***** category', category)
    }
    const handlePostType = (e) => {
        setPostType(e.target.value)
        console.log('***** post type', postType)
    }
    const onFormSubmit = (e) => {
        e.preventDefault()
        console.log(title, body, category, currentUser.name, postType)
        // if (title || body || category|| postType === '') {
        //     alert('Must fill out all fields.')
        // }
        if (category || postType === null) {
            alert('Please choose an option')
            } else {
                alert('Post Submited! :)')
                VolunteerModel.create({
                    title,
                    name: currentUser.name,
                    photo: currentUser.photo,
                    body,
                    postType,
                    category,
            })
        }
    }
    return (
        <div>
                <form onSubmit={onFormSubmit}>
                    <label>
                        Post Title: 
                        <input type="text" name="postTitle" value={title} onChange={handleTitle}></input>
                    </label><br />
                    <label>Body: 
                    <input type="text" name="body" value={body} onChange={handleBody}></input>
                    </label><br/>
                    <label>
                        Category:
                        <select value={category} onChange={handleCategory}>
                        <option value="Select">Select</option>
                        <option value="Trade">Trade</option>
                        <option value="Buy">Buy</option>
                        <option value="Volunteer">Volunteer</option>
                        <option value="Trade Hub">Trade Hub</option>
                        </select>
                        Post Type: 
                        <select value={postType} onChange={handlePostType}>
                        <option value="Select">Select</option>
                        <option value="Seeking">Seeking</option>
                        <option value="Sharing">Sharing</option>
                        </select>
                        <input type="submit" value="Submit"></input>
                    </label>
                </form>
        </div>
    );
}
export default NewPostVolunteer;