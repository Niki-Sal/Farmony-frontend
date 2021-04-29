import React from 'react';
const Team = () => {
    return (
        <div className="team">
            <h2 className="team-heading">The Team</h2>
            <div className="team-bios">
                <div className="one-bio">
                    <img className="bio-img" src="https://i.imgur.com/lEaRyJn.jpg" alt="sophia photo"/>
                    
                </div>
                <div className="one-bio">
                    <img className="bio-img" src="https://ca.slack-edge.com/T0351JZQ0-U01HBTGU8U9-97747d0de7b7-512" alt="NIkki photo"/>
                   
                </div>
                <div className="one-bio">
                    <img className="bio-img" src="https://ca.slack-edge.com/T0351JZQ0-U01H6MDTMRB-f354f619620c-512" alt="Mocha photo"/>
                    
                </div>
            </div>
        </div>
    )
}
export default Team