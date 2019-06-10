import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.props.deleteRestaurant(restaurant.id)}> X </button>
        </li>
        <ReviewsContainer restaurant={restaurant}/>
      </div>
    );
  }
};

export default Restaurant;
