
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


    const handleSubmit = () =>{
    
        // console.log(photo)
        // updateUser({photo: photo}, currentUser.id)
    }

    return ( 
       
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="name">Photo</label>
                <input type="file" name="photo" 
                    onChange={(e) => {setPhoto(e.target.files[0])}}  
                    className="form-control"
                />
                <button onClick={handlePhoto} className="button float-right">Upload Photo</button>
              
            </form>
            
      
    )
}

export default CreateImage;