import React, { createContext, useState } from 'react'

export const RestaurantContext=createContext()

const RestaurantContextProvider = (props) => {
  const [restaurants, setRestaurants]=useState([])
  return (
    <>
       <div>
          <RestaurantContext.Provider value={{restaurants, setRestaurants}}>
            {props.children}
          </RestaurantContext.Provider>
       </div>
    </>
  )
}

export default RestaurantContextProvider