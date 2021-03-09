import React from 'react';
import HolisticModel from '../models/holistic'

const ViewPost = (props) => {

    let { id } = props.id
    console.log(id)

    return (
        <div>
            <p>post {id}</p>
        </div>
    );
}

export default ViewPost;
