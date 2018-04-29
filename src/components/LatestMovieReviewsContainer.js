import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class MovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = { reviews: [] }
  }

  fetchReview() {
    fetch(URL, {
      headers: {'Content-Type': 'application/json'},
      method: 'get'
    }).then(x => x.json()).then(json => this.setState({reviews}))
  }

  render() {
    return (
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
