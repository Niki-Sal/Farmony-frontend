import React, { useState } from 'react';
import HolisticModel from '../models/holistic'

const NewPost = () => {
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    const handleTitle = (e) => {
        setTitle(e.target.value)
        console.log('***** title', title)
    }

    const handleBody = (e) => {
        setBody(e.target.value)
        console.log('***** body', body)
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
        console.log('***** category', category)
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        console.log(title, body, category)
        // HolisticModel.create({
        //     title,
        //     name: currentUser.name,
        //     photo: currentUser.photo,
        //     body,
        //     category,
        // })
    }

    return (
        <div>
            <form>
                <form onSubmit={onFormSubmit}>
                    <label>
                        Post Title: 
                        <input type="text" name="postTitle" value={title} onChange={handleTitle}></input>
                    </label><br />
                    <label>Body: 
                    <input type="text" name="body" value={body} onChange={handleBody}></input>
                    </label><br/>
                    <label>
                        Category:
                        <select value={category} onChange={handleCategory}>
                        <option value="Trade">Trade</option>
                        <option value="Buy">Buy</option>
                        <option value="Volunteer">Volunteer</option>
                        <option value="Holistic Hub">Holistic Hub</option>
                        
                        </select>
                        <input type="submit" value="Submit"></input>
                    </label>

                </form>
            </form>
        </div>
    );
}

export default NewPost;
