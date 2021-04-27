import React from 'react';
import Zipcode from './Zipcode'
import {  Link } from 'react-router-dom';
import Footer from './Footer'
import Team from './Team';
const Home = () => {
    return (
        
        <div class='HomepageMain'>
            <div className="zipFormDiv">
               <p className="aboutFarmony"> <br />
                The health and wellness industry is currently valued at 4.5 trillion dollars for a reason.  It’s hard not to notice that being healthy today seems to come with a hefty price tag. The purpose of Farmony is to ensure that no one has to go broke to get healthy. <span id="aboutFarmony2">Farmony is a social media website for those looking to cut the middle man out of their shopping and buy locally, straight from the source.  Users can buy or trade products with one another, offer or seek help at urban farms, trade recipes or just learn about the farmers in their area.
            </span></p> 
            </div>
            
            <h1 className="welcome">Welcome to Farmony</h1>
            <div class ="topDivHP"></div>
            <div class ="bottomDivHP"></div>
            <div class ="triangleDivHpR"></div>
            <div class ="triangleDivHpL"></div>
            <Zipcode />
            <Team />
            <Footer />
        </div>
    );
}
export default Home;