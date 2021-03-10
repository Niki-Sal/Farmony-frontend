import React from 'react';
import { useState, useEffect } from 'react'
import GardenModel from '../models/garden'
import {Link} from 'react-router-dom'


const Zipcode = () => {

    const [zipcode, setZipcode] = useState('')
    const [gardens, setGardens] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await GardenModel.query({zip: zipcode})
    //         console.log(res)
    //         setGardens(res.data)
    //     }
    //     fetchData()
    // }, [])
    const listOfGardens = gardens.map((gardenData, index) => {
        return (
            <div>
            <img src={gardenData.image}/>
            <p>{gardenData.name} {gardenData.address} {gardenData.state} {gardenData.zip}</p>
            <button key={gardenData._id}><Link to="/:id"/>View Farm Profile</button>
            </div>
        )
    })

    //to route to other page, pass gardens as a prop to whatever component you want to render to 

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
    return (
        <div>
            <form onSubmit={handleSubmit} className="zip-form">
                <textarea type="text" name="zip" onChange={entry} className="form-control" />
                <button type="submit"><Link to="/localgardens"/>Search</button>
            </form>
            
        </div>
    )
}

export default Zipcode;

// value={zip} onChange={handleEmail}

