import React from 'react';
import Zipcode from './Zipcode'

import {  Link } from 'react-router-dom';
import Footer from './Footer'


const Home = () => {

  
    return (
        
        <div class='HomepageMain'>
            <h1 className="welcome">Welcome to Farmony</h1>
            <div class ="topDivHP"></div>
            <div class ="bottomDivHP"></div>
            <div class ="triangleDivHpR"></div>
            <div class ="triangleDivHpL"></div>
            <Zipcode />
            <Footer />
        </div>
    );
}

export default Home;
