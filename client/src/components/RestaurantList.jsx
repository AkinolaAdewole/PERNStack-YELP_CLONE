import React, { useContext, useEffect } from 'react';
import RestaurantFinder from '../Api/RestaurantFinder';
import { RestaurantContext } from '../ContextApi/RestaurantContextProvider';

// // useEffect is used to fetch data from the server when the component mounts for the first time. 
// // The fetched data is then stored in the restaurants state variable using the setRestaurants function, which may be used to update 
// // the component's UI based on the received data. The effect runs only once because the dependency array is empty.

const RestaurantList = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantContext);

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

  const handleDelete= async()=>{
    try {
        RestaurantFinder.delete(`/${id}`);
    } catch (error) {
        
    }
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
              <tr key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{"$".repeat(restaurant.price_range)}</td>
                <td>Rating</td>
                <td><button className="btn btn-warning">Edit</button></td>
                <td><button onClick={()=>handleDelete(restaurant.id)} className="btn btn-danger">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RestaurantList;
