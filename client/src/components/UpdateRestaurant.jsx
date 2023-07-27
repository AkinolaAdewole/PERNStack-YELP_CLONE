import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantContext } from '../ContextApi/RestaurantContextProvider';
import RestaurantFinder from '../Api/RestaurantFinder';

const UpdateRestaurant = (props) => {
    const { id } = useParams();
    const { restaurants } = useContext(RestaurantContext);

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get(`/${id}`);
                // console.log(response);
                const restaurantData = response.data.data.restaurant;
                setName(restaurantData.name);
                setLocation(restaurantData.location);
                setPriceRange(restaurantData.price_range);
            } catch (err) {
                console.error(err);
            }
        };
    
        fetchData();
    }, [id]);
    

    const handleUpdate = () => {}

  return (
    <div>
        {/* <h1>{restaurants[0].name}</h1> */}
        {/* <h1>{restaurants && restaurants.length > 0 ? restaurants[0].name : ""}</h1> */}


         <form>
            <div className='form-group mb-3'>
                <label htmlFor="name">Name</label>
                <input type="text" className='form-control' id="name" value={name} 
                  onChange={(e)=>setName(e.target.value)} placeholder='Name' />
            </div>

            <div className='form-group mb-3'>
                <label htmlFor="name">Location</label>
                <input type="text" id="location" className='form-control' value={location} 
                   onChange={(e)=>setLocation(e.target.value)} placeholder='Location' />
            </div>

            <div className='form-group mb-3'>
                <label htmlFor="name">Price Range</label>
                <input type="number" placeholder='Price range' id='price_range' value={priceRange}
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