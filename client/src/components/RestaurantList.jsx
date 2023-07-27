import React, { useEffect } from 'react'
import RestaurantFinder from '../Api/RestaurantFinder'

const RestaurantList = () => {

    useEffect ( async()=>{
        try {
            const response= await RestaurantFinder.get("/");
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    },[])
  return (
    <>
        <div className='list-group'>
            <table class="table table-hover table-dark">
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
                    <tr>
                        <td>MacDonalds</td>
                        <td>New York</td>
                        <td>$$</td>
                        <td>Rating</td>
                        <td><button className="btn btn-warning">Edit</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <td>Taco Bell</td>
                        <td>London</td>
                        <td>$$</td>
                        <td>@fat</td>
                        <td><button className="btn btn-warning">Edit</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>

                    <tr>
                        <td>Ckicken Republic</td>
                        <td>Ogbomoso</td>
                        <td>@twitter</td>
                        <td>Rating</td>
                        <td><button className="btn btn-warning">Edit</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default RestaurantList