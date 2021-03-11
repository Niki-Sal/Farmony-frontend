import React, { useState, useEffect } from 'react';
import HolisticModel from '../models/holistic'
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import ViewPostBuy from './ViewPostBuy';

const NewPostBuy = () => {
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
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
    const onFormSubmit = (e) => {
        e.preventDefault()
        console.log(title, body, category, currentUser.name, category)
        BuyModel.create({
            title,
            name: currentUser.name,
            photo: currentUser.photo,
            body,
            postType,
            category,
        })
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
                        Seeking:
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange} />
                        </label>
                        Category:
                        <select value={category} onChange={handleCategory}>
                        <option value="Trade">Trade</option>
                        <option value="Buy">Buy</option>
                        <option value="Volunteer">Volunteer</option>
                        <option value="Holistic Hub">Holistic Hub</option>
                        </select>
                        <input type="submit" value="Submit"></input>
                        <ViewPostBuy data={title, currentUser.name, currentUser.photo, body, postType, category}/>
                    </label>
                </form>
        </div>
    );
}
export default NewPostBuy;