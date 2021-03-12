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
    const [ photo, setPhoto] = useState('')
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
<<<<<<< HEAD
            {farmer ? <img src="https://i.imgur.com/G9tBFn9.png" alt="farmer-badge"/> : `%${name} is not a farmer%`}
=======
<<<<<<< HEAD
            <CreateImage user={user}/>
            {farmer ? `%${name} is a farmer% ` : `%${name} is not a farmer%`}
=======
            {farmer ? <img src="https://i.imgur.com/G9tBFn9.png" alt="farmer-badge"/> : `%${name} is not a farmer%`}
>>>>>>> a074912967dc763b1cd0c65fd2dafddcc50a1f50
>>>>>>> 527456298282f161a77da9494735b331329cbfef
            <EditForm />
            <Link to={`/previewprofile/${user.id}`} >view how your profile looks like for others</Link>
            
        </div>
    );

}

export default Profile;