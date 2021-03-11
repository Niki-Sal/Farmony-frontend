import React from 'react';
import Axios from 'axios'
import { useState } from 'react';
import UserModel from '../models/user'


const CreateImage = (props) => {
    let [photo, setPhoto] = useState('');
    const [currentUser, setCurrentUser] = useState({});


    const handlePhoto = (e) =>  {
            e.preventDefault();
            const formData = new FormData()
            formData.append("file", photo)
            formData.append("upload_preset", "kqricfij")
            console.log(photo);
            Axios.post("https://api.cloudinary.com/v1_1/ddmbb2ian/image/upload", formData)
            .then((response) => {
                    
                    console.log(response);
                    const photoUrl = response.data.url;
                    return photoUrl 
                })
    }
    // const updateUser = async (userAbout, userId) => {
    //     function isUpdatedUser(user) {
    //         return currentUser.id === userId;
    //     }
    //     const result = await UserModel.update(userId, userAbout)
    //     let usersCurrent = currentUser
    //     usersCurrent.about= userAbout.about
    //     setCurrentUser(usersCurrent)
    //   }
      
    //   const [formStyle, setFormStyle ] = useState({ display: 'none'})
    //   const [bodyStyle, setBodyStyle ] = useState({})
    //   const toggleBodyForm = () => {
    //     if (formStyle.display === 'block') {
    //       setFormStyle({ display: 'none'})
    //       setBodyStyle({ display: 'block'})
    //     } else {
    //       setFormStyle({display: 'block'})
    //       setBodyStyle({display: 'none'})
    //     }
    // }

    const handleSubmit = () =>{
        // toggleBodyForm()
        // console.log(photo)
        // updateUser({photo: photo}, currentUser.id)
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Photo</label>
                    <input type="File" name="photo" 
                        onChange={(e) => {setPhoto(e.target.files[0])}}  
                        className="form-control"
                    />
                    <button onClick={handlePhoto} className="button float-right">Upload Photo</button>
                </div>
            </form>
            {/* <image src={photo} /> */}
        </div>    
    )
}

export default CreateImage;