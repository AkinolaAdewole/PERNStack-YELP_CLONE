import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { RestaurantContext } from '../ContextApi/RestaurantContextProvider';
import RestaurantFinder from '../Api/RestaurantFinder';

const RestaurantDetailsPage = () => {
  const {id}=useParams()
 const {selectedRestaurants, setSelectedRestaurants}=useContext(RestaurantContext);

 useEffect(()=>{
   const fetchData = async()=>{
     try {
      const response = await RestaurantFinder.get(`/${id}`);
      setSelectedRestaurants(response.data.data.restaurant)
     } catch (error) {
      console.error(error);
     }
   };
   fetchData();
 },[]);
  return (
    <>
       <div>{selectedRestaurants && selectedRestaurants.name}</div>
    </>
  )
}

export default RestaurantDetailsPage