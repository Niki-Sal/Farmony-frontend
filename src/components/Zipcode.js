import React from 'react';
import { useState, useEffect } from 'react'
import GardenModel from '../models/garden'


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
            <div key={gardenData._id}> 
            <img src={gardenData.image}/>
            <p>{gardenData.name} {gardenData.address} {gardenData.state} {gardenData.zip}</p>
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
                <button type="submit">Search</button>
            </form>
            {listOfGardens.length >= 1 ? listOfGardens : null}
        </div>
    )
}

export default Zipcode;

// value={zip} onChange={handleEmail}

