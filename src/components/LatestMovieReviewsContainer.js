import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';
require('es6-promise').polyfill();


const NYT_API_KEY = '4e5a46d2c2974c6c9e2185b06e132c54';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component{

  constructor(){
    super()

    this.state = {
      reviews: []
    }
  }


  componentDidMount(){
    fetch(URL).then(res=>res.json()).then(json=>{
      this.setState({
        reviews: json.results
      })
    })
  }


  render(){
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
