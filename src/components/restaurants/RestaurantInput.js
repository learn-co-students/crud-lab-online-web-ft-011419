import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text:""
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text:""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Restaurant</label>
          <p><input type="text" value={this.state.text} onChange={this.handleOnChange}/></p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
