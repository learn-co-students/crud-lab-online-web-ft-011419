import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const restaurants = this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />)

    return(
      <div>
        {restaurants}
      </div>
    );
  }
};

export default Restaurants;
