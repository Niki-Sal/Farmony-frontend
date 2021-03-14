import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import UserModel from '../models/user'

// const cloudinary = require('cloudinary-core').Cloudinary.new()



const Profile = (props) => {

const [users, setUsers] = useState([])
const [user, setUser] = useState([])
let thisUserId = props.match.params.id
useEffect(async()=>{
    const users = await UserModel.all()
    setUsers (users.data)
    console.log(users.data)
    console.log(thisUserId)
    let tempuser = users.data.filter((eachUser)=>{
        return thisUserId === eachUser._id
    })
    setUser(tempuser)
    console.log(tempuser)
    
},[])
const thisUser = user.map((userData, index) =>{
      
    return(
        <div className="profile-container">
            <div>
                {userData.photo ? <img className = "profile-pic" src={userData.photo} />  : <img className = "profile-pic" src = "https://res.cloudinary.com/ddmbb2ian/image/upload/v1615672962/qvo_UWEYzvsVDmwUPEWLsCIh_xjgub8.jpg"  />}
                <div className="name-farmer">
                <p>Name | {userData.name}</p>
                {userData.farmer ? <img className = "badge-pic" src="https://i.imgur.com/G9tBFn9.png" alt="farmer-badge"/> : ""}
                </div>
            </div>
           <div className="about-container">
                <p className="about">{userData.about}</p>
                <Link to='/profile'>&larr;Back to Edit Profile</Link>
           </div>
        </div>
        )
})
    
    return (
        <div className="text-center pt-4">
           {thisUser}
        </div>
    );

}

export default Profile;