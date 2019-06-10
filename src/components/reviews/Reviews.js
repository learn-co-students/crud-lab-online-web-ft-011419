import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const filteredReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const reviews = filteredReviews.map(review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />)
    
    return (
      <div>
        {reviews}
      </div>
    );
  }
};

export default Reviews;
