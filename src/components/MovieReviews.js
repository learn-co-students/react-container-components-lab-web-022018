import React from 'react'
//
// class MovieReviews extends React.Component{
//
//   render(){
//     return (
//       <div className="review-list">
//         {this.props.reviews.map(review=>
//           (
//             <div>
//             <h5>This movie review:</h5>
//             <h1>{review.display_title}</h1>
//             <h3>{review.mpaa_rating}</h3>
//             <h3>{review.critics_pick}</h3>
//             <h3>{review.byline}</h3>
//             <h3>{review.headline}</h3>
//             <h3>{review.summary_short}</h3>
//             </div>
//           )
//         )}
//       </div>
//     )
//   }
// }

const MovieReviews = ({reviews}) => {
  return <div className="review-list">
  {reviews.map(review=>
    (
      <div>
      <h5>This movie review:</h5>
      <h1>{review.display_title}</h1>
      <h3>{review.mpaa_rating}</h3>
      <h3>{review.critics_pick}</h3>
      <h3>{review.byline}</h3>
      <h3>{review.headline}</h3>
      <h3>{review.summary_short}</h3>
      </div>
    )
  )}
  </div>
}
//
// const reviewRender = ({reviews}) =>{
//   return (
//     <div>
//       <h5>This movie review:</h5>
//       <h1>{reviews.display_title}</h1>
//       <h3>{reviews.mpaa_rating}</h3>
//       <h3>{reviews.critics_pick}</h3>
//       <h3>{reviews.byline}</h3>
//       <h3>{reviews.headline}</h3>
//       <h3>{reviews.summary_short}</h3>
//     </div>
//   )
// }
//
//
// const MovieReviews = ({reviews}) =>  <div className="review-list"> {reviews.map(reviewRender)}</div>


MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
