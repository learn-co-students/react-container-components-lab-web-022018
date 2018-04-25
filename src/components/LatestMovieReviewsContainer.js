import React, { Component } from 'react';
import 'isomorphic-fetch';

import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer';


const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    }
  }

  searchSubmit(value) {
    fetch(URL + '&query=' + value).then(r => r.json()).then(data => this.setState({reviews: data.results}))
  }

  componentDidMount() {
    fetch(URL).then(r => r.json()).then(data => this.setState({reviews: data.results}))
  }

  render() {
    return(
      <div className="latest-movie-reviews">
        <SearchableMovieReviewsContainer searchSubmit={this.searchSubmit.bind(this)} reviews={this.state.reviews} />
      </div>
    )
  }
}
export default LatestMovieReviewsContainer
