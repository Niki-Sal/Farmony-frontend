import React from 'react';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserModel from '../models/user'
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

const EditForm = (props) => {
    const [currentUser, setCurrentUser] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [aboutme, setAboutme] = useState('')
    // const [users, setUsers] = useState([])
   
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
    ////////////
    const updateUser = async (userAbout, userId) => {
        function isUpdatedUser(user) {
            return currentUser.id === userId;
        }
        const result = await UserModel.update(userId, userAbout)
        let usersCurrent = currentUser
        usersCurrent.about= userAbout.about
        setCurrentUser(usersCurrent)
      }
      
      const [formStyle, setFormStyle ] = useState({ display: 'none'})
      const [bodyStyle, setBodyStyle ] = useState({})
      const toggleBodyForm = () => {
        if (formStyle.display === 'block') {
          setFormStyle({ display: 'none'})
          setBodyStyle({ display: 'block'})
        } else {
          setFormStyle({display: 'block'})
          setBodyStyle({display: 'none'})
        }
      }
      //////////
    const onFormSubmit = async (event)=> {
        // event.preventDefault()
        toggleBodyForm()
        console.log(aboutme)
        updateUser({about: aboutme}, currentUser.id)
    }

    return (
        <div>
            {/* <p>Name: {currentUser.name}</p>  
            <p>ID: {currentUser.id}</p>   */}
            <form onSubmit={ onFormSubmit }>
                {/* <label for="about">About Me</label> */}
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
