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
                <input type="text" className='form-control' value={name} 
                  onChange={(e)=>setName(e.target.value)} placeholder='Name' />
            </div>

            <div className='form-group mb-3'>
                <label htmlFor="name">Location</label>
                <input type="text" className='form-control' value={location} 
                   onChange={(e)=>setlocation(e.target.value)} placeholder='Location' />
            </div>

            <div className='form-group mb-3'>
                <label htmlFor="name">Price Range</label>
                <input type="number" placeholder='Price range' value={priceRange}
                   onChange={(e)=>setPriceRange(e.target.value)} className='form-control' />
            </div>

            <div>
                <button className="btn btn-primary" onClick={()=>handleUpdate()}>Update</button>
            </div>
         </form>
    </div>
  )
}

export default UpdateRestaurant