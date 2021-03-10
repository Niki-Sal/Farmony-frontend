import React from 'react';
import HolisticModel from '../models/holistic'

const ViewPost = (props) => {

    
    console.log(props.id)

    return (
        <div>
            <p>post {props.id}</p>
        </div>
    );
}

export default ViewPost;
