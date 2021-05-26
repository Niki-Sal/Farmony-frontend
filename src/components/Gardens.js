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
            <div className="ind-garden">
                <div className="garden-list-img-div"><img  className="garden-list-img" src= {gardenData.image} alt= "gardenpicture"/></div>
                <div className="garden-list-address">
                <h3 className="ind-garden-heading" key={gardenData._id}>{gardenData.name}</h3> 
                <p>{gardenData.address} <br />{gardenData.city}, {gardenData.state} {gardenData.zip}</p></div>
               <div className="ind-garden-profile"> <Link to={`/gardenprofile/${gardenData._id}`}><p className="viewGardButton">View Garden Profile</p></Link></div>
            </div>
        )
    })
    return (
        <div>
            <div className="community-title">
            <h1 className="garden-list">Gardens</h1>
            </div>
            <div className="list-of-gardens">
            {listOfGardens}
            </div>
        </div>
    );
}
export default Gardens;