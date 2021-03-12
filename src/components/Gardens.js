import React from 'react';
import { useState, useEffect } from 'react'
import GardenModel from '../models/garden'
import {Link} from 'react-router-dom'




const Gardens = () => {
    const [gardens, setGardens] = useState([])
    useEffect(()=>{
        const fetchData = async() =>{
            const res = await GardenModel.all()
            console.log(res)
            setGardens(res.data)
        }
        fetchData()
    },[])
    const listOfGardens = gardens.map((gardenData, index) =>{
        return(
            <div>
                <p key={gardenData._id}>{gardenData.name} <img  className="garden-img" src= {gardenData.image} alt= "gardenpicture"/>{gardenData.address} {gardenData.state} {gardenData.zip}</p>
                <Link to={`/gardenprofile/${gardenData._id}`}>View Garden Profile</Link>
            </div>
        )
    })

  
    return (
        <div>
            {listOfGardens}
        </div>
    );
}

export default Gardens;
