import React, { useContext, useEffect } from 'react';
import RestaurantFinder from '../Api/RestaurantFinder';
import { useNavigate } from 'react-router-dom';
import { RestaurantContext } from '../ContextApi/RestaurantContextProvider';

const RestaurantList = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantContext);

  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data.data.restaurants);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  const handleUpdate=(e,id)=>{
    e.stopPropagation();
    navigate(`/restaurant/${id}/update`);
  }

  const handleDelete= async(e,id)=>{
    e.stopPropagation();
    try {
        const response= await RestaurantFinder.delete(`/${id}`);
        setRestaurants(restaurants.filter((restaurant)=>{
            return restaurant.id !==id
        }))
        console.log(response);
    } catch (error) {
        console.error(error);
        
    }
  }

  const handleRestaurantSelect=(id)=>{
    navigate(`/restaurant/${id}`);
  }
  return (
    <>
      <div className='list-group'>
        <table className="table table-hover table-dark">
          <thead>
            <tr className='table-primary'>
              <th scope="col">Restaurant</th>
              <th scope="col">Location</th>
              <th scope="col">Price Range</th>
              <th scope="col">Ratings</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {restaurants && restaurants.map((restaurant) => (
              <tr onClick={()=>handleRestaurantSelect(restaurant.id)} key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{"$".repeat(restaurant.price_range)}</td>
                <td>Rating</td>
                <td><button onClick={(e)=>handleUpdate(e,restaurant.id)} className="btn btn-warning">Edit</button></td>
                 <td> <button onClick={(e) => handleDelete(e,restaurant.id)} className="btn btn-danger">Delete</button> </td> 
                {/* <td><button onClick={()=>handleDelete(restaurant.id)} className="btn btn-danger">Delete</button></td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RestaurantList;
