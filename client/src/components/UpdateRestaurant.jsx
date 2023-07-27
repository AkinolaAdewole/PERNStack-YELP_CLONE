import React from 'react'
import { useParams } from 'react-router-dom'

const UpdateRestaurant = (props) => {
    const {id} =useParams();
  return (
    <div>
         <form>
            <div className='form-group'>
                <label htmlFor="name">Name</label>
                <input type="text" className='form-control' placeholder='Name' />
            </div>

            <div className='form-group'>
                <label htmlFor="name">Location</label>
                <input type="text" className='form-control' placeholder='Location' />
            </div>

            <div className='form-group'>
                <label htmlFor="name">Price Range</label>
                <input type="text" placeholder='Price range' className='form-control' />
            </div>
         </form>
    </div>
  )
}

export default UpdateRestaurant