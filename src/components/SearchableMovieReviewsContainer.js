// Code SearchableMovieReviewsContainer Here
import React from 'react';
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends React.Component {

  state = {
    searchVal: ""
  }

  handleChange = (e) => {
    this.setState({searchVal: e.target.value})
  }

  handleSearch = (e) => {
    e.preventDefault()
    this.props.searchSubmit(this.state.searchVal)
  }

  render() {
    return(
      <div class="search-movie-container">
        <form onSubmit={this.handleSearch}>
          <input onChange={this.handleChange} value={this.state.searchVal} type="text" />
          <input type="submit" />
        </form>
        {this.props.reviews.map((review, index) => {return (<MovieReviews key={index} data={review}/>)})}
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
