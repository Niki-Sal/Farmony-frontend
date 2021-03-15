import React from 'react';
const Team = () => {
    return (
        <div className="team">
            <h2 classname="team-heading">The Team</h2>
            <div className="team-bios">
                <div className="one-bio">
                    <img className="bio-img" src="https://i.imgur.com/lEaRyJn.jpg" alt="sophia photo"/>
                    <p classname="bio-text">Sophia is a front-end engineer who is passionate about social justice and creating space for healing and connection.<br/> She has a background in mental health advocacy and is extremely determined to make sustainable foods accessible and affordable. <br/> What cultivates a community more than putting our hands in the earth?</p>
                </div>
                <div className="one-bio">
                    <img className="bio-img" src="https://ca.slack-edge.com/T0351JZQ0-U01HBTGU8U9-97747d0de7b7-512" alt="NIkki photo"/>
                    <p classname="bio-text"> Nikki is a software developer with a creative and analytical mind, she developed in previous roles as an architectural designer and energy analyst.<br/>
I am a progressive technologist who strives to be a better version of myself by constantly learning and improving.<br/>
Strong time management and a detailed-oriented mind are my superpowers to maximize my impact and solve problems quickly and collaboratively.
 </p>
                </div>
                <div className="one-bio">
                    <img className="bio-img" src="https://ca.slack-edge.com/T0351JZQ0-U01H6MDTMRB-f354f619620c-512" alt="Mocha photo"/>
                    <p classname="bio-text">Mocha Brown is a full-stack web developer from Detroit, Michigan.<br/> Farmony falls right in line with one of her her life goals of connecting  communities to affordable, healthy food. <br/>She is especially passionate about doing so for lower income households and folks living in poverty. <br/>As a creative, applications Mocha plans to build in the future center around community and art.</p>
                </div>
            </div>
        </div>
    )
}
export default Team