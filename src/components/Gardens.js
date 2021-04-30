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
            <div className="garden-container">
                <h3 key={gardenData._id}>{gardenData.name}</h3> 
                <div>
                    <p>Address: {gardenData.address}{gardenData.city} {gardenData.state} {gardenData.zip}</p>
                </div>
                <div className = "garden-prop">
                    <div className="garden-img-div">
                        <img className="garden-img" src= {gardenData.image} alt= "gardenpicture"/>
                    </div>
                    
                    <div className="garden-link"> <Link to={`/gardenprofile/${gardenData._id}`}>View Garden Profile</Link></div>

                </div>
            </div>
        )
    })
    return (
        <div>
            <h1 className="heading">Gardens</h1>
            <div >
            {listOfGardens}
            </div>
        </div>
    );
}
export default Gardens;