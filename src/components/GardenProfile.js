import React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
                <h1 className="heading" key={gardenData._id}>{gardenData.name}</h1>
        
                <div className="garden-container">
                    <p>Address: {gardenData.address}{gardenData.city}, {gardenData.state} {gardenData.zip}<br /></p>
                    <div className="garden-prop">
                        <div className="garden-img-div">
                            <img className="garden-img" src={gardenData.image} alt="gardenpicture" />
                        </div>

                        <div className="garden-link">
                            <a href={gardenData.map} target="_blank">Google map</a> 
                        </div>

                    </div>
                    


                    
                    <div className="garden-profile-info">
                        
                       
                        <div className="info-container" >
                            <h3 className = "review-title">About {gardenData.name}</h3>
                            <p>{gardenData.about}</p> 
                        </div>
                        
                        <div>
                            <h3 className = "review-title">Reviews</h3>
                        </div>
                        <div className="review-container">
                            <p>{gardenData.review[0]}</p>
                        </div>
                        <div className="review-container">
                            <p>{gardenData.review[1]}</p>
                        </div>
                        <div className="review-container">
                            <p>{gardenData.review[2]}</p>
                        </div>
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