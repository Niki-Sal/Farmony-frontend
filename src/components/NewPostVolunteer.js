import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import VolunteerModel from '../models/volunteer'
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import ViewPostVolunteer from './ViewPostVolunteer'


const NewPostVolunteer = () => {
    const [category, setCategory] = useState('Select')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [postType, setPostType] = useState('Select')
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
        // e.preventDefault()
        console.log(title, body, category, currentUser.name, postType)
        // if (title || body || category|| postType === '') {
        //     alert('Must fill out all fields.')
        // }
        if (category !== 'Select' && postType !== 'Select') {
            // alert('Post Submited! :)')
            VolunteerModel.create({
                title,
                name: currentUser.name,
                photo: currentUser.photo,
                content: body,
                postType,
                category,
            })
            } else {
               alert('Please choose an option')
        }
    }

    return (
         <div>
            <h1 className="post-title">Post a new thread</h1>
                <form  className="post-form" onSubmit={onFormSubmit}>
                    <label>
                        Post Title: 
                        <input type="text" name="postTitle" value={title} onChange={handleTitle}></input>
                    </label><br />
                    <label>
                    <textarea type="text" rows= '5' cols='80' name="body" value={body} onChange={handleBody}></textarea>
                    </label><br/>
                    <label>
                        Category:
                        <select value={category} onChange={handleCategory}>
                        <option value="Select">Select</option>
                        <option value="Trade">Trade</option>
                        <option value="Buy">Buy</option>
                        <option value="Volunteer">Volunteer</option>
                        <option value="Trade Hub">Holistic Hub</option>
                        </select>
                        Post Type: 
                        <select value={postType} onChange={handlePostType}>
                        <option value="Select">Select</option>
                        <option value="Seeking">Seeking volunteer</option>
                        <option value="Sharing">Volunteering</option>
                        </select>
                        <input type="submit" value="Submit"></input>
                    </label>
                </form>
        </div>
    );
}
export default NewPostVolunteer;
