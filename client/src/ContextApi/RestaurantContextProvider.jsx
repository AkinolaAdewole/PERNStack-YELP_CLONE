import React, { createContext } from 'react'

export const RestaurantContext=createContext()

const RestaurantContextProvider = (props) => {
  return (
    <>
       <div>
          <RestaurantContext.Provider>
            {props.children}
          </RestaurantContext.Provider>
       </div>
    </>
  )
}

export default RestaurantContextProvider