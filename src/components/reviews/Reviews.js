import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props
    const filteredReviews = reviews.filter(review => review.restaurantId === restaurantId)

    const showReviews = filteredReviews.map(review => {
      return <Review key={review.id} review={review} deleteReview={deleteReview} />
    })
    return (
      <ul>
        {showReviews}
      </ul>
    );
  }
};

export default Reviews;
