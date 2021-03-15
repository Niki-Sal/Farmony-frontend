import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import PostModel from '../models/post'


const Comments = (props) => {

    const [comment, setComment] = useState('')
    const [post, setPost] = useState([])
    const [name, setName] = useState('')
    // const [currentUser, setCurrentUser] = useState({});
    // const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect( async () => {
        // let token;

        // if (!localStorage.getItem('jwtToken')) {
        //     setIsAuthenticated(false);
        //     console.log('====> Authenticated is now FALSE');
        // } else {
        //     token = jwt_decode(localStorage.getItem('jwtToken'));
        //     setAuthToken(localStorage.getItem('jwtToken'));
        //     setCurrentUser(token);
        // }
        setPost(props.post)
        
    }, []);

    const handleComment = async (e) => {
        await setComment(e.target.value)
        console.log('***** comment', comment)
    }
    
    const handleName = async (e) => {
        await setName(e.target.value)
        console.log('***** name', name)
    }

    const onFormSubmit = async (e) => {
        e.preventDefault()
        console.log(name, comment)

        const newComment =  await {

            name: name,
            content: comment,
            date: Date()

        }
        

        await PostModel.update(post._id, post.comment.push(newComment))
        console.log(`***** Comment made *****`)
    }

    return (
        <div>

            <form onSubmit={onFormSubmit}>
                <label>
                    Add Name:
                    <input type="text" name="name" value={name} onChange={handleName}></input>
                    Add Comment:
                    <input type="text" name="comment" value={comment} onChange={handleComment}></input>
                </label><br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Comments;