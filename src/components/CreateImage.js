
import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import UserModel from '../models/user'



const CreateImage = (props) => {
    let [photo, setPhoto] = useState('');
   


    const handlePhoto = (e) =>  {
            e.preventDefault();
            const formData = new FormData()
            formData.append("file", photo)
            formData.append("upload_preset", "p3bforb")
            console.log(photo);
            axios.post("https://api.cloudinary.com/v1_1/dbljwcjis/image/upload", formData)
            .then((response) => {
                    
                    console.log(response);
                    const photoUrl = response.data.url;
                    return photoUrl
                })
    }


        const getPhoto = async() =>{
            let newPhoto = ''
            const result = await UserModel.oneUser(id)
            newPhoto= result.data.photo
            setPhoto(newPhoto)
            console.log(newPhoto)
        }
       
       if (currentTime >= expirationTime) {
           handleLogout();
           alert('Session has ended. Please login to continue.');
       } else {
            getPhoto()
       }

    return (
        <div className="pic-section">
    
        {photo? <img className = "profile-pic" src={photo} /> : <img src = "https://res.cloudinary.com/ddmbb2ian/image/upload/v1613687758/c1phcqb46j0rzxtysmnw.jpg" style={{maxWidth:'200px'}} />}
       
        <p>Change your profile picture</p>
        <form className= "picture-change"onSubmit={handleSubmit}>
            <input type='file' onChange={(event)=> {
            setPhoto(event.target.files[0])
            }} />
            <button type='submit'>Upload</button>
        </form>
        
     
        </div>
    );
}

export default CreateImage;