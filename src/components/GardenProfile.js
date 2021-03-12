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

<<<<<<< HEAD
  
    const thisGarden = garden.map((gardenData, index) =>{
      
        return(
            <div>
                <p key={gardenData._id}>{gardenData.name}</p>
                <img src= {gardenData.image} alt= "gardenpicture"/>
                <p>{gardenData.address}</p>
                <p>{gardenData.state} {gardenData.zip}</p>
                <p>About: {gardenData.about}</p>
                <p>{gardenData.review[0]}</p>
                <p>{gardenData.review[1]}</p>
                <p>{gardenData.review[2]}</p>
                <a href= {gardenData.map}>Google map</a>
=======
    }, [])


    const thisGarden = garden.map((gardenData, index) => {
>>>>>>> a074912967dc763b1cd0c65fd2dafddcc50a1f50

        return (
            <div>
                <div className="garden-profile-heading">
                <h1 className="garden-profile-name" key={gardenData._id}>{gardenData.name}</h1>
                </div>
                <div className="garden-profile">
                    <div className="farm-profile"><img className="farm-profile-img" src={gardenData.image} alt="gardenpicture" /></div>
                    <div className="farm-profile-address">
                        <p>{gardenData.address} <br />
                            {gardenData.state} {gardenData.zip}<br />
                            <a href={gardenData.map}>Google map</a> </p>
                    </div>
                    <div className="garden-profile-info">
                        <div className="garden-profile-about">
                            <p>{gardenData.about}</p> </div>
                        <div className="garden-profile-reviews">
                            <p>{gardenData.review[0]}</p>
                            <p>{gardenData.review[1]}</p>
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
