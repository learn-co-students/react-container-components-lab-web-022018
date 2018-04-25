// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props)=>{
  MovieReviews.defaultProps= {
    reviews:props.reviews,
  };

  console.log(props.reviews)
  const reviewList = props.reviews.map((review, index)=>{return <p key={index}>{review.byline +" | " + review.display_title +" | " + review.mpaa_rating}</p>})

  console.log(reviewList)
    return(
      <div className="review-list">
        { reviewList }
      </div>
    )

}


export default MovieReviews
