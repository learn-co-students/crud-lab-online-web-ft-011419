import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const reviewRender = this.props.review.map(review => <Review review={review} key={review.id} deleteReview={this.props.deleteReview} />)

    return (
      <ul>
        {reviewRender}
      </ul>
    );
  }
};

export default Reviews;