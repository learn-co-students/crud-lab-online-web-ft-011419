import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render() {

    const renderRestaurant = this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} key={restaurant.id} deleteRestaurant={this.props.deleteRestaurant} />)

    return(
      <ul>
        Restaurants Component
        {renderRestaurant}
      </ul>
    );
  }
};

export default Restaurants;