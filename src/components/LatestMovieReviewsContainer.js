import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '6c8ad1d23ec445ef87c669a73ac25d6e';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: []
  }

  componentWillMount() {
    fetch(URL)
      .then(res => res.json())
      .then(json => this.setState({reviews: json.results}));
  }

  render() {
    let movieList;
    movieList = this.state.reviews.map(movie => {
      return <MovieReviews key={movie.display_title}reviews={movie} />
    })
    return (
      <div className="latest-movie-reviews">
        <h2>The Latest Reviews:</h2>
        <ul><MovieReviews reviews={this.state.reviews}/></ul>
      </div>
    );
  }

}

export default LatestMovieReviewsContainer;
