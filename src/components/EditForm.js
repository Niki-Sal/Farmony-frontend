import React from 'react';
import { useEffect, useState } from 'react';
import UserModel from '../models/user'
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

const EditForm = (props) => {
    const [currentUser, setCurrentUser] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [aboutme, setAboutme] = useState('')
   
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
    

    const onInputChange = (event) =>{
        setAboutme(event.target.value)
    }



    const onFormSubmit = async (event)=> {
        event.preventDefault()
        console.log(aboutme)
        UserModel.update(currentUser.id, 
            {
                name: currentUser.name,
                email: currentUser.email,
                about: aboutme
            })
    }

    return (
        <div>
            <p>Name: {currentUser.name}</p>  
            <p>ID: {currentUser.id}</p>  
            <form onSubmit={ onFormSubmit }>
                <label for="about">About Me</label>
                <textarea 
                onChange = {onInputChange }
                id="aboutme" rows='5' cols='30'
                value={aboutme}
                placeholder="tell us about yourself">
                </textarea>
                 
                <button type="submit" >submit</button>
            </form>
        </div>
    );
}

export default EditForm;
