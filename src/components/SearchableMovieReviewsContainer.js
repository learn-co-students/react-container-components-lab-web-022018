import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '19ae913b47594a5dbf7313a484958116';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super()

    this.state = {
      reviews: [],
      searchTerm: "poop"
    }
  }

  handleSearchTerm = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${URL}${this.state.searchTerm}`).then(res=>res.json()).then(json=>this.setState({reviews: json.results}))
  }

  render(){
    console.log(this.state.reviews)
    return (
      <div className="searchable-movie-reviews">
        <h1>SEAaaaaAaARCH</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleSearchTerm} />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }






}

export default SearchableMovieReviewsContainer
