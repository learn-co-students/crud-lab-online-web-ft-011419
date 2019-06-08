import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    
    const { id } = this.props.restaurant

    return (
      <div>
        <ReviewInput restaurantId={id} addReview={this.props.addReview}/>
        <Reviews review={this.props.review} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    review: state.review.filter(review => review.restaurantId === ownProps.restaurant.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: ({ text, restaurantId }) => dispatch({type: "ADD_REVIEW", review: { text, restaurantId }}),
    deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
