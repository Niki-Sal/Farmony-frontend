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
    console.log(props.id)

    const onFormSubmit = async (e) => {
        e.preventDefault()
        console.log(currentUser.name, comment)
        // if (e.target.value === []) {
        //     alert('Please enter a comment')
        // }
        const newComment = {
             
            comment: {
                name: currentUser.name,
                photo: currentUser.photo,
                content: comment,
                date: Date()
            }
        }
        const postId = props.id
    
        await PostModel.update(postId, newComment) 

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
