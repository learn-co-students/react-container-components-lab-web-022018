// Code MovieReviews Here
import React from 'react';

class MovieReviews extends React.Component {

  render() {
    return (
      <div className="review">
        <h3 className="display_title">{this.props.data.display_title}</h3>
        <img className="thumb" src={this.props.data.multimedia.src}></img>
        <h4><a href={this.props.data.link.url}>{this.props.data.headline}</a></h4>
        <h5>{this.props.data.byline}</h5>
        <p>{this.props.data.summary_short}</p><br></br>
      </div>
    )
  }
}

export default MovieReviews
