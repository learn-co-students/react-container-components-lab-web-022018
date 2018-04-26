import React from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;


class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }
  handleInputChange = event => {
    this.setState({searchTerm: event.target.value})
  }
  handleSubmit = event => {
    event.preventDefault()
    fetch(BASE_URL+`${this.state.searchTerm}`).then(r => r.json()).then(r => this.setState({reviews: r.results}))
  }
  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='search-input'>Search Movie Reviews</label>

          <input
            id='search-input'
            onChange={this.handleSearchInputChange} />
          <button type="submit">Submit</button>
        </form>
        {this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
