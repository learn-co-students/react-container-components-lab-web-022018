// Code SearchableMovieReviewsContainer Here
import React, {Component} from 'react'
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = '6c8ad1d23ec445ef87c669a73ac25d6e';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

  state = {
    searchTerm: '',
    reviews: []
  }
  render() {
  return (
    <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='search-input'>Search Movie Reviews</label>

        <input
          id='search-input'
          type="text"
          style={{width: 300}}

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
