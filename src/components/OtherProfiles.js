import React from 'react';
import { useState, useEffect } from 'react';
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
        <div>
            <p>{userData.name}</p>
            <p>{userData.email}</p>
            <p>{userData.about}</p>
            {userData.photo ? <img src={userData.photo} style={{maxWidth:'200px'}} />  : <img src = "https://res.cloudinary.com/ddmbb2ian/image/upload/v1613687758/c1phcqb46j0rzxtysmnw.jpg" style={{maxWidth:'200px'}} />}
            <p>{userData.farmer ? `%${userData.name} is a farmer% ` : `%${userData.name} is not a farmer%`}</p>
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