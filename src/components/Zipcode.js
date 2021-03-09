import React from 'react';
import { useState, useEffect } from 'react'
import GardenModel from '../models/garden'


const Zipcode = () =>{

const [zipcode, setZipcode] = useState('')
const [gardens, setGardens] = useState([])

useEffect(()=>{
    const fetchData = async() =>{
        const res = await GardenModel.find({})
        console.log(res)
        setGardens(res.data)
    }
    fetchData()
},[])
const listOfGardens = gardens.map((gardenData, index) =>{
    return(
        <p key={gardenData._id}>{gardenData.name}{gardenData.image}{gardenData.address}{gardenData.state}{gardenData.zip}</p>
    )
})

//to route to other page, pass gardens as a prop to whatever component you want to render to 


//     const gardenZipcode = () =>{


       
//     }
//     // const handleSubmit = (e) => {
//     //     e.preventDefault();

//    const handleZipcode = () =>{
//        if("input" === gardenZipcode)
//        return garden
//    } 
    const entry = (e) =>{
        setZipcode(e.target.value)
        console.log('====> from entry', zipcode)
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        
        console.log('====> from submit', zipcode)
    }
return(
    <div className="zip-form">
    <textarea type="text" name="zip" onChange={entry} className="form-control"/>
    <button type="submit" onClick={handleSubmit}>Search</button>
    {listOfGardens}
</div>
)
}

export default Zipcode;

// value={zip} onChange={handleEmail}

