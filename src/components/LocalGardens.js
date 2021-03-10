import React from 'react';
import { useState, useEffect } from 'react'
import GardenModel from '../models/garden'
import {Link} from 'react-router-dom'
import Zipcode from './Zipcode'

import React from 'react'

const LocalGardens = () => {

    const listOfGardens = gardens.map((gardenData, index) => {
        return (
            <div>
            <img src={gardenData.image}/>
            <p>{gardenData.name} {gardenData.address} {gardenData.state} {gardenData.zip}</p>
            <button key={gardenData._id}><Link to="/:id"/>View Farm Profile</button>
            </div>
        )
    })

    return (
        <div>
            {listOfGardens.length >= 1 ? listOfGardens : null} 
        </div>
    )
}

export default LocalGardens
