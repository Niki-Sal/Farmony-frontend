import React from 'react';
const Team = () => {
    return (
        <div className="team">
            <h2 className="team-heading">The Team</h2>
            <div className="team-bios">
                <div className="one-bio">
                    <img className="bio-img" src="https://i.imgur.com/lEaRyJn.jpg" alt="sophia photo"/>
                    <h3 className="bio-name" title="Sophia is a front-end engineer who is passionate about social justice and creating space for healing and connection. She has a background in mental health advocacy and is extremely determined to make sustainable foods accessible and affordable. What cultivates a community more than putting our hands in the earth?">Sophia Dipaola</h3>
                </div>
                <div className="one-bio">
                    <img className="bio-img" src="https://ca.slack-edge.com/T0351JZQ0-U01HBTGU8U9-97747d0de7b7-512" alt="NIkki photo"/>
                    <h3 className="bio-name" title="Nikki is a software developer located in Seattle, Washington. With her background in sustainability, she is passionate about low-cost local productions and how effective supply chain can be a solution to sustainable business development.  With a creative and analytical mind, developed in previous roles as an architect and energy analyst she believe in maximizing the impact through creativity and collaboration.">  Nikki Salehi</h3>
                </div>
                <div className="one-bio">
                    <img className="bio-img" src="https://ca.slack-edge.com/T0351JZQ0-U01H6MDTMRB-f354f619620c-512" alt="Mocha photo"/>
                    <h3 className="bio-name" title="Mocha is a full-stack web developer from Detroit, Michigan. Farmony falls right in line with one of her her life goals of connecting  communities to affordable, healthy food. She is especially passionate about doing so for lower income households and folks living in poverty. As a creative, applications Mocha plans to build in the future center around community and art.">Mocha Brown</h3>
                </div>
            </div>
        </div>
    )
}
export default Team