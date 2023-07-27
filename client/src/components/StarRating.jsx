import React from 'react'

const StarRating = ({rating}) => {
    const stars=[];
    for(let i=1; i<=5; i++){
        if(i<=rating){
            stars.push(<FontAwesomeIcon icon="fa-sharp fa-solid fa-star" />)
        }
    }

    // const stars = Array.from({ length: 5 }).map((_, index) => (
    //     <FontAwesomeIcon key={index} icon={index < rating ? faStar : ["far", "star"]} />
    //   ));

  return (
    <div>StarRating</div>
  )
}

export default StarRating