import React from 'react';
import Zipcode from './Zipcode'
import {  Link } from 'react-router-dom';
import Footer from './Footer'
import Team from './Team';
const Home = () => {
    return (
        
        <div class='Homepage-div'>
            
            <h1 className="welcome">Welcome to Farmony</h1>
            <div className="welcome-note-div">
                <p className="welcome-note">Create your own Marketplace and buy fresh produce</p> 
            </div>
            <div class ="bottom-div">
                <p className="bottom-note">Find Your Nearest Garden</p> 
            </div>
            <div class ="tri-div">
                <div class ="triangleDiv"></div>
            </div>
          
            <Zipcode />
            <Team />
            
        </div>
    );
}
export default Home;