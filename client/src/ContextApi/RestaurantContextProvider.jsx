import React, { createContext, useState } from 'react'

export const RestaurantContext=createContext()

const RestaurantContextProvider = (props) => {
  const [restaurants, setRestaurant]=useState([])
  return (
    <>
       <div>
          <RestaurantContext.Provider value={{restaurants, setRestaurant}}>
            {props.children}
          </RestaurantContext.Provider>
       </div>
    </>
  )
}

export default RestaurantContextProvider