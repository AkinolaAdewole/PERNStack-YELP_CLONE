import React, { createContext, useState } from 'react'

export const RestaurantContext=createContext()

const RestaurantContextProvider = (props) => {
  const [restaurants, setRestaurants]=useState([]);

  const AddRestaurant =(restaurant)=>{
    setRestaurants([...restaurants, restaurant])
  }
  return (
    <>
       <div>
          <RestaurantContext.Provider value={{restaurants, setRestaurants, AddRestaurant}}>
            {props.children}
          </RestaurantContext.Provider>
       </div>
    </>
  )
}

export default RestaurantContextProvider