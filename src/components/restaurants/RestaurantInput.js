import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange(event) {
    this.setState({ text: event.target.value })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <label>Add Restaurant</label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}


export default RestaurantInput
