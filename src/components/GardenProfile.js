import React from 'react';
import { useState, useEffect } from 'react'
import GardenModel from '../models/garden'




const GardenProfile = (props) => {
    const [gardens, setGardens] = useState([])
    const [garden, setGarden] = useState([])
    let thisGardenId = props.match.params.id
    useEffect(async()=>{
        const gardens = await GardenModel.all()
        setGardens (gardens.data)
        console.log(gardens.data)
        console.log(thisGardenId)
        let tempgarden = gardens.data.filter((eachGarden)=>{
            return thisGardenId === eachGarden._id
        })
        setGarden(tempgarden)
        console.log(tempgarden)
        
    },[])

  
    const thisGarden = garden.map((gardenData, index) =>{
      
        return(
            <div>
                <p key={gardenData._id}>{gardenData.name}</p>
                <img src= {gardenData.image} alt= "gardenpicture"/>
                <p>{gardenData.address}</p>
                <p>{gardenData.state} {gardenData.zip}</p>
                <p>{gardenData.review[0]}</p>
                <p>{gardenData.review[1]}</p>
                <p>{gardenData.review[2]}</p>
                <a href= {gardenData.map}>Google map</a>

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
