import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import HolisticModel from '../models/holistic'
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import ViewPost from './ViewPost';
const NewPost = () => {
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
        if (category !== 'Select' && postType !== 'Select') {
            // alert('Post Submited! :)')
            HolisticModel.create({
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
            <form  className="post-form" onSubmit={onFormSubmit}>
                <label>
                    Post Title: 
                    <input className="form-item2" type="text" name="postTitle" value={title} onChange={handleTitle}></input>
                </label>
                
                <label>
                    Category:
                    <select className="form-item2" value={category} onChange={handleCategory}>
                    <option value="Select">Select</option>
                    <option value="Holistic Hub">Holistic Hub</option>
                    </select>
                    Post Type: 
                    <select className="form-item2" value={postType} onChange={handlePostType}>
                    <option value="Select">Select</option>
                    <option value="Seeking">Suggestions</option>
                    <option value="Sharing">Questions</option>
                    </select>
                </label>
                <label>
                    <textarea className="form-item" type="text" rows= '5' cols='80' name="body" value={body} onChange={handleBody}></textarea>
                    <input id="subButton" type="submit" value="Submit"></input>
                </label><br/>
            </form>
        </div>
    );
}
export default NewPost;