import React from 'react'

const AddRestaurant = () => {
  return (
    <div>
         <div className='mb-4'>
            <form action="">
                <div className='form-row'>
                        <div className='form-group col-md-6'>
                            <input type="text" className='form-control' 
                            placeholder='Name'/>
                        </div>

                        <div className='form-group col-md-6'>
                            <input type="text" className='form-control' 
                            placeholder='location'/>
                        </div>

                        <div className='col'>
                            <select name="" id="" className='custom-select my-1 mr-sm-2'>
                                <option disabled> Price Range</option>
                                <option value="1">$</option>
                                <option value="2">$$</option>
                                <option value="3">$$$</option>
                                <option value="4">$$$$</option>
                                <option value="5">$$$$$</option>
                            </select>
                        </div>

                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
         </div>
    </div>
  )
}

export default AddRestaurant