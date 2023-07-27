import React from 'react'

const StarRating = ({rating}) => {
    const stars=[];
    for(let i=1; i<=5; i++){
        if(i<=rating){
            stars.push(<i class="fa-solid fa-star"></i>);
        } else if(i==Math.ceil(rating) && !Number.isInteger(rating)){
            stars.push(<i class="fa-regular fa-star-half-stroke"></i>);
        } else {
            stars.push(<i class="fa-regular fa-star"></i>);
        }
    }

    // const stars = Array.from({ length: 5 }).map((_, index) => (
    //     <FontAwesomeIcon key={index} icon={index < rating ? faStar : ["far", "star"]} />
    //   ));

    // const stars = [...Array(maxRating)].map((_, index) => (
    //     <FontAwesomeIcon key={index} icon={index < rating ? solidStar : regularStar} />
    //   ));

  return (
    <>
      <div>{stars}</div>
    </>
  )
}

export default StarRating