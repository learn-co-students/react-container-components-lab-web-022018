// Code SearchableMovieReviewsContainer Here
import React from 'react'
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
const NYT_API_KEY_AGAIN = 'f98593a095b44546bf4073744b540da0';
const URL_SEARCH = (searchTerm)=>('https://api.nytimes.com/svc/movies/v2/reviews/search.json?'+`api-key=${NYT_API_KEY_AGAIN}`+'&query='+ searchTerm
            )

class SearchableMovieReviewsContainer extends React.Component{
  state ={
    reviews: [],
    searchTerm: "",
  }

  componentDidMount = ()=>{
    fetch(URL_SEARCH(this.state.searchTerm)).then(r=> r.json()).then(json=> this.setState({reviews:json.results}))
    console.log(this.state.reviews)
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    console.log(this.state.searchTerm)
    this.setState({
      reviews: this.componentDidMount()
    })
  }

  handleChange=(e)=>{
    this.setState({
      searchTerm: e.target.value,
    })
  }

  render(){
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <input name="searchTerm" onChange={this.handleChange}/>
          <input type='submit'/>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
