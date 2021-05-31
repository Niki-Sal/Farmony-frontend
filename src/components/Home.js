import React from 'react';
import Zipcode from './Zipcode'
import Footer from './Footer'
import Team from './Team';
import Video from './Video'


const Home = () => {
    


    return (

        <div class='homepage-main'>
            <Video />
            <div className="separator"></div>
            <div className="home-about-container">
                <h1 className="welcome">About Farmony</h1>
                <div className="about-home">
                <p className="aboutFarmony">
                    The health and wellness industry is currently valued at 4.5 trillion dollars for a reason.  It’s hard not to notice that being healthy today seems to come with a hefty price tag. The purpose of Farmony is to ensure that no one has to go broke to get healthy. <br /> <span id="aboutFarmony2">Farmony is a social media website for those looking to cut the middle man out of their shopping and buy locally, straight from the source.  Users can buy or trade products with one another, offer or seek help at urban farms, trade recipes or just learn about the farmers in their area.
                </span></p>

                <img className="homepage-img" src="https://res.cloudinary.com/doihe1pi6/image/upload/v1622162514/elaine-casap-qgHGDbbSNm8-unsplash_pu7q2o.jpg" alt="A person passing a bowl of tomatoes to another."></img>
                </div>
                <div className="zipFormDiv"></div>

                <div className="topDivHP"></div>
                <div className="bottomDivHP"></div>
                <div className="triangleDivHpR"></div>
                <div className="triangleDivHpL"></div>
                <Zipcode />
                <Team />
                <Footer />
            </div>

        </div>
    );
}
export default Home;