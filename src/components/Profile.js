import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Profile = (props) => {
   const { handleLogout, user } = props;
   const { id, name, email, exp, about, photo } = user;
   const expirationTime = new Date(exp * 1000);
   let currentTime = Date.now();

   // make a condition that compares exp and current time
   if (currentTime >= expirationTime) {
       handleLogout();
       alert('Session has ended. Please login to continue.');
   }
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState('')
    const uploadImage = async (e)=>{
        e.preventDefault()
        const files = e.target.files
        const data = new FormData()
        // data.append('file', file[0])
        data.append('upload_preset', 'geekyimage')
        setLoading(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/ddmbb2ian/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()
        console.log(file)

        setImage(file.secure_url)
        setLoading(false)
    }

   const userData = user ?
   (<div>
       <h1>Profile</h1>
       <p>[Image placeholder] {photo}</p>
       <div className="App">
          
            <input type= "file" name="file" placeholder="upload an image" onChange={uploadImage} />
            {loading ? (
                <h3>Loading...</h3>
            ):(
                <img src={image} style={{width: '300px'}}/>
            )}
        </div>
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
            <Link to='/editform'>edit about me</Link>
           
        </div>
    );

}

export default Profile;