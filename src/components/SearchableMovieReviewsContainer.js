// Code SearchableMovieReviewsContainer Here
import React from 'react'
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';
require('es6-promise').polyfill();

const NYT_API_KEY = '4e5a46d2c2974c6c9e2185b06e132c54';
let URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=4e5a46d2c2974c6c9e2185b06e132c54&query='

class SearchableMovieReviewsContainer extends React.Component{
  constructor(){
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  executeSearch = (event) => {
    event.preventDefault()
    URL = URL + this.state.searchTerm
    fetch(URL).then(res=>res.json()).then(json=>{
      this.setState({
        reviews: json.results
      })
    })
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <form>
          <input onChange={this.handleSearch} />
          <button onClick={this.executeSearch} type="submit">Search</button>
          <MovieReviews reviews={this.state.reviews}/>
        </form>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
