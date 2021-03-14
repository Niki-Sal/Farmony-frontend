import React from 'react';
import { useState} from 'react'
import GardenModel from '../models/garden'
import {Link} from 'react-router-dom'

const Zipcode = () => {
    const [zipcode, setZipcode] = useState('')
    const [gardens, setGardens] = useState([])
    
    const listOfGardens = gardens.map((gardenData, index) => {
        return (
            <div  className="garden-prop"key={gardenData._id}> 
            <div className="garden-img-zip "><img src={gardenData.image} alt="garden"/></div>
            <p>{gardenData.name} {gardenData.address} {gardenData.state} {gardenData.zip}</p>
            <Link to={`/gardenprofile/${gardenData._id}`}>View Garden Profile</Link>
            </div>
        )
    })
   
    const entry = (e) => {
        setZipcode(e.target.value)
        console.log('====> from entry', zipcode)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const fetchData = async () => {
            const res = await GardenModel.query({ zip: zipcode })
            console.log(res.data)
            setGardens(res.data)
        }
        fetchData()
        console.log('====> from submit', zipcode)
    }
   //Did you mean <= 1?
    return (
        <div>
            <form onSubmit={handleSubmit} className="zip-form">
                <input type="text" name="zip" onChange={entry} className="form-control" />
                <button type="submit">Search</button>
            </form>
            <div className="garden-result">
                {listOfGardens.length >= 1 ? listOfGardens : null}
            </div>
        </div>
    )
}
export default Zipcode;
