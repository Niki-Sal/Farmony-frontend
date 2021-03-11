import React from 'react';
import { useState, useEffect } from 'react';
import UserModel from '../models/user'

const cloudinary = require('cloudinary-core').Cloudinary.new()



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
        <div>
            <p>{userData.name}</p>
            <p>{userData.email}</p>
            <p>{userData.about}</p>
            <p>picture placeholder</p>
            {userData.farmer ? `%${userData.name} is a farmer% ` : `%${userData.name} is not a farmer%`}
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