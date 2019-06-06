import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    const { reviews, restaurantId, deleteReview } = this.props;
    const restaurantReviews = reviews.filter(review => review.restaurantId === restaurantId)
    const reviewList = restaurantReviews.map((review, index) => {
      return (
        <Review
          key={index}
          restaurantId={review.restaurantId}
          review={review}
          deleteReview={deleteReview}
        />
      )
    })

    return(
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;
