import React from 'react';
import Zipcode from './Zipcode'
import Team from './Team'
import About from './About'

import {  Link } from 'react-router-dom';


const Home = () => {

  
    return (
        <div>
            <About />
            <Zipcode />
            <Team />
        </div>
    );
}

export default Home;
