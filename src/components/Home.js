import React from 'react';
import Zipcode from './Zipcode'
import About from './About'

import {  Link } from 'react-router-dom';


const Home = () => {

  
    return (
        <div>
            <About />
            <Zipcode />
        </div>
    );
}

export default Home;
