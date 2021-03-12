import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserModel from '../models/user'
import EditForm from './EditForm'
import CreateImage from './CreateImage'


const Profile = (props) => {
  
   const { handleLogout, user } = props;
   const { id, name, email, farmer, exp} = user;
   const expirationTime = new Date(exp * 1000);
   let currentTime = Date.now();

    const [ about, setAbout] = useState('')
    const getAbout = async() =>{
        let newAbout = ''
        const result = await UserModel.oneUser(id)
        newAbout= result.data.about
        setAbout(newAbout)
        console.log(newAbout)
    }
   
   if (currentTime >= expirationTime) {
       handleLogout();
       alert('Session has ended. Please login to continue.');
   } else {
        getAbout()
   }
 

   const userData = user ?
   (<div>
       <p>Name: {name}</p>
       <p>Email: {email}</p>
       <p>ID: {id}</p>
       <p>About Me: {about}</p>
       
   </div>) : <h2>Loading...</h2>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };

    
    return (
        <div className="text-center pt-4">
            {user ? userData : errorDiv()}
            {farmer ? `%${name} is a farmer% ` : `%${name} is not a farmer%`}
            <EditForm />
            <CreateImage user={user}/>
            <Link to={`/previewprofile/${user.id}`} >view how your profile looks like for others</Link>
            
        </div>
    );

}

export default Profile;