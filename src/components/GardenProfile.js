import React from 'react';
import { useState, useEffect } from 'react'
import GardenModel from '../models/garden'
import {Link} from 'react-router-dom'




const GardenProfile = () => {
    const [garden, setGarden] = useState({})

    useEffect(()=>{
        const fetchData = async() =>{
            const res = await GardenModel.show(`${garden}/${garden._id}`)
            console.log(res)
            setGarden(res.data)
        }
        fetchData()
    },[])
    const listOfGardens = gardens.map((gardenData, index) =>{
        return(
            <p key={gardenData._id}>{gardenData.name} <img src= {gardenData.image} alt= "gardenpicture"/>{gardenData.address} {gardenData.state} {gardenData.zip} {gardenData.map}{gardenData.about}{gardenData.review}</p>
        )
    return (
        <div>
            <p>Farm Profile</p>
        </div>
    )
}

export default GardenProfile
