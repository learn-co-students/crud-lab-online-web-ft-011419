import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux';

// <RestaurantInput : set up input props for restaurant, addRestaurant
// <Restaurants: set up props for restaurant and its actions
// mapDispatchToProps dispatch actions

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>      
        
        <RestaurantInput 
          addRestaurant={this.props.addRestaurant} 
        />
        
        <Restaurants 
          restaurants={this.props.restaurants}
          deleteRestaurants={this.props.deleteRestaurants}
        />

      </div>
    )
  }
}

const mapStateToProps = state => ({ restaurants: state.restaurants });

const mapDispatchToProps = dispatch => ({

  addRestaurant: text => dispatch({ type: 'ADD_RESTAURANT', text}),
  deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})

});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
