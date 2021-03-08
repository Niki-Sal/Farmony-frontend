import React from 'react';
import { useState, useEffect } from 'react'
import GardenModel from '../models/garden'



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
            <p key={gardenData._id}>{gardenData.name}</p>
        )
    })

  
    return (
        <div>
            {listOfGardens}
        </div>
    );
}

export default Gardens;
