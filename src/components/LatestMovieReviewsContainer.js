import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '19ae913b47594a5dbf7313a484958116';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor(){
    super()

    this.state = {
      reviews: []
    }
  }

  componentWillMount(){
    fetch(URL).then(res=>res.json()).then(json => this.setState({reviews: json.results }))
  }

  render(){
    return (
      <div className="latest-movie-reviews">
        <h1>LATEST</h1>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }






}

export default LatestMovieReviewsContainer
