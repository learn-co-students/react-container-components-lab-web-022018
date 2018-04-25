import React from 'react'
const MovieReviews = ({reviews}) => {

	let allReviews = reviews.map(review =>
		<li className='review'>{review.display_title} - {review.headline}
			<p>{review.summary_short}</p>
		</li>
		)

	return (
		<div className='review-list'>
			{allReviews}
		</div>
		)
}

MovieReviews.defaultProps = { reviews:[] }

export default MovieReviews
