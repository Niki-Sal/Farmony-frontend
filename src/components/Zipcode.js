import React from 'react';
import { useState } from 'react'
import GardenModel from '../models/garden'
import { Link } from 'react-router-dom'

const Zipcode = () => {
    const [zipcode, setZipcode] = useState('')
    const [gardens, setGardens] = useState([])

    const listOfGardens = gardens.map((gardenData, index) => {
        return (
            <div key={gardenData._id} className="gardenDisplayDiv">
                <div className="garden-img-div"><img className="garden-img" src={gardenData.image} alt="garden" /></div>
                <p className="gardenDisplayP">{gardenData.name}<br />{gardenData.address}<br />{gardenData.state} {gardenData.zip}</p>
                <p className="gardenDisplayLink">
                    <Link to={`/gardenprofile/${gardenData._id}`}>View Garden Profile</Link>
                </p>
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
        <div className="pageContainer">
            

            <form onSubmit={handleSubmit} className="zip-form">
                <input className="form-controlHp" type="text" name="zip" placeholder="Enter zipcode to find farms near you." onChange={entry} />
                <button type="submit" id="zipButton">Search</button>
            </form>
            {listOfGardens.length >= 1 ? listOfGardens : null}
        </div>
    )
}
export default Zipcode;