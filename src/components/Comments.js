import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import PostModel from '../models/post'


const Comments = (props) => {

    const [comment, setComment] = useState([])
    const [currentUser, setCurrentUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {
        let token;
  
        if (!localStorage.getItem('jwtToken')) {
            setIsAuthenticated(false);
            console.log('====> Authenticated is now FALSE');
        } else {
            token = jwt_decode(localStorage.getItem('jwtToken'));
            setAuthToken(localStorage.getItem('jwtToken'));
            setCurrentUser(token);
        }

    }, []);

    const handleComment = (e) => {
        setComment(e.target.value)
        console.log('***** comment', comment)
    }
    console.log(props.post)

    const onFormSubmit = async (e) => {
        e.preventDefault()
        console.log(currentUser.name, comment)
        
        const newComment = {
             
                name: currentUser.name,
                photo: currentUser.photo,
                content: comment,
                date: Date()
            
        }
        const foundPost = props.post
    
        await PostModel.update(foundPost._id, foundPost.comment.push(newComment)) 

    }

    return (
        <div>
    
            <form onSubmit={onFormSubmit}>
                <label>
                    Add Comment: 
                    <input type="text" name="comment" value={comment} onChange={handleComment}></input>
                </label><br />
                    <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Comments;
