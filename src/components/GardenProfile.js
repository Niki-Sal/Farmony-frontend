import React from 'react';
import { useState, useEffect } from 'react'
import GardenModel from '../models/garden'




const GardenProfile = (props) => {
    const [gardens, setGardens] = useState([])
    const [garden, setGarden] = useState([])
    let thisGardenId = props.match.params.id
    useEffect(async () => {
        const gardens = await GardenModel.all()
        setGardens(gardens.data)
        console.log(gardens.data)
        console.log(thisGardenId)
        let tempgarden = gardens.data.filter((eachGarden) => {
            return thisGardenId === eachGarden._id
        })
        setGarden(tempgarden)
        console.log(tempgarden)

    }, [])


    const thisGarden = garden.map((gardenData, index) => {

        return (
            <div>
                <div className="garden-profile-heading">
                    <h1 className="garden-profile-name" key={gardenData._id}>{gardenData.name}</h1>
                </div>
                <div className="garden-profile">
                    <div className="garden-profile-img-addy">
                    <div className="farm-profile-img-div"><img className="farm-profile-img" src={gardenData.image} alt="gardenpicture" /></div>
                    <div className="farm-profile-address">
                        <p>{gardenData.address} <br />
                            {gardenData.city}, {gardenData.state} {gardenData.zip}<br /></p>
                        <div clasName="map">
                            <a href={gardenData.map} target="_blank">Directions</a>
                        </div>
                    </div>
                </div>
                <div className="garden-profile-info">
                    <div className="garden-profile-about-heading">
                        <h3>About {gardenData.name}</h3>
                    </div>
                    <div className="garden-profile-about">
                        <p>{gardenData.about}</p> </div>
                    {/* <div className="garden-profile-reviews"> */}
                    <div className="garden-profile-reviews-heading">
                        <h3>Reviews</h3>
                    </div>
                    <div className="review-1">
                        <p>{gardenData.review[0]}</p></div>
                    <div className="review-2">
                        <p>{gardenData.review[1]}</p></div>
                    <div className="review-3">
                        <p>{gardenData.review[2]}</p></div>
                </div>
                </div> 
            </div>
            

        )
    })

return (
    <div>
        {thisGarden}
    </div>
)
}

export default GardenProfile
