import React from 'react';

const Review = (props) => (
  <div className="review">
    <a href={props.link.url} target="_blank">{props.display_title}</a>
  </div>
)

const MovieReviews = (props) => (
  <div className="review-list">
    { props.reviews.map(Review) }
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
}



export default MovieReviews
