import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { RestaurantContext } from '../ContextApi/RestaurantContextProvider';

const RestaurantDetailsPage = () => {
  const {id}=useParams()
 const {selectedRestaurants, setSelectedRestaurant}=useContext(RestaurantContext);
  return (
    <>
    </>
  )
}

export default RestaurantDetailsPage