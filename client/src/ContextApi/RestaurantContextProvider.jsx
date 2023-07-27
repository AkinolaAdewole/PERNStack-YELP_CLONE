import React, { createContext, useState } from 'react'

export const RestaurantContext=createContext()

const RestaurantContextProvider = (props) => {
  const [restaurants, setRestaurants]=useState([]);
  const[selectedRestaurants, setSelectedRestaurants]=useState(null);

  const AddRestaurant =(restaurant)=>{
    setRestaurants([...restaurants, restaurant])
  }
  return (
    <>
       <div>
          <RestaurantContext.Provider 
          value={{restaurants, 
            setRestaurants, 
            AddRestaurant,
            selectedRestaurants,
            setSelectedRestaurants
          }}>
            {props.children}
          </RestaurantContext.Provider>
       </div>
    </>
  )
}

export default RestaurantContextProvider