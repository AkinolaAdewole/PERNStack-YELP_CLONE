import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateRestaurant = (props) => {
    const {id} =useParams();

    const[name,setName]=useState();
    const[location,setlocation]=useState();
    const[priceRange,setPriceRange]=useState();

    const handleUpdate=()=>{}

  return (
    <div>
         <form>
            <div className='form-group mb-3'>
                <label htmlFor="name">Name</label>
                <input type="text" className='form-control' placeholder='Name' />
            </div>

            <div className='form-group mb-3'>
                <label htmlFor="name">Location</label>
                <input type="text" className='form-control' placeholder='Location' />
            </div>

            <div className='form-group mb-3'>
                <label htmlFor="name">Price Range</label>
                <input type="number" placeholder='Price range' className='form-control' />
            </div>

            <div>
                <button className="btn btn-primary">Update</button>
            </div>
         </form>
    </div>
  )
}

export default UpdateRestaurant