import React from 'react';

import {  Link } from 'react-router-dom';


const Home = () => {

  
    return (
        <div>
            <Link to='/gardens'>Gardens list</Link>
            <Zipcode />
        </div>
    );
}

export default Home;
