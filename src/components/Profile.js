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

    /////////////////
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
   (<div className="profile-info">
       <div className="name-farmer">
        <p>Name | {name}</p>
        
        {farmer ? <img className = "badge-pic" src="https://i.imgur.com/G9tBFn9.png" alt="farmer-badge"/> : ""}
       </div>
       <p>Email | {email}</p>

       
   </div>) : <h2>Loading...</h2>
    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    return (
        <div >
            <h2 className="welcome-user">Welcome {name}!</h2>
            <div className="profile-container">
                <div className="pic-section">
                    <CreateImage user={user}/>
                    {user ? userData : errorDiv()}
                </div>
                <div className="about-container"> 
                    <div>
                        <h4>About ME</h4>
                        <p className="about">{about}</p>
                    </div>
                    <EditForm />
                    <Link to={`/previewprofile/${user.id}`} >Profile Preview</Link>
                </div>

            </div>
            
        </div>
    );
}
export default Profile;