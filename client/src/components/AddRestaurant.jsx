import React, { useContext, useState } from 'react'
import RestaurantFinder from '../Api/RestaurantFinder';
import { RestaurantContext } from '../ContextApi/RestaurantContextProvider';

const AddRestaurant = () => {
  const{AddRestaurant}= useContext(RestaurantContext);
  const[name, setName]=useState("");
  const[location, setLocation]=useState("");
  const[priceRange, setPriceRange]=useState("Price Range");

  const handleSubmit= async(e)=>{
    e.preventDefault();
    try {
     const response= await RestaurantFinder.post("/",{
                        name,
                        location,
                        price_range:priceRange
                      });
                      AddRestaurant(response.data.data.restaurant);
                      console.log(response.data.data.restaurant);
                  console.log(response);
    } catch (error) {
      
    }
    
  }
  return (
    <div>
         <div className='mb-4'>
            <form action="">
                <div className='row'>
                            <div className='col'>
                                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} 
                                  className='form-control' 
                                  placeholder='Name'/>
                            </div>

                            <div className='col'>
                                <input type="text" className='form-control' 
                                  value={location} onChange={(e)=>setLocation(e.target.value)} placeholder='location'/>
                            </div>

                            <div className='col'>
                                <select value={priceRange} onChange={(e)=>setPriceRange(e.target.value)}
                                   className='custom-select my-1 mr-sm-2'>
                                    <option disabled> Price Range</option>
                                    <option value="1">$</option>
                                    <option value="2">$$</option>
                                    <option value="3">$$$</option>
                                    <option value="4">$$$$</option>
                                    <option value="5">$$$$$</option>
                                </select>
                            </div>

                      <div className="col">
                        <button onClick={handleSubmit} className="btn btn-primary">Add</button>
                      </div>
                </div>
            </form>
         </div>
    </div>
  )
}

export default AddRestaurant