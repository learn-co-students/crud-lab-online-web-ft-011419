import React, { Component } from 'react';
import Reviews from './Reviews';
import { EventEmitter } from 'events';

class ReviewInput extends Component {

  state = {
    text: '',
    restaurantId: this.props.restaurantId
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        Review: 
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input type="text" value={this.state.text} onChange={event => this.handleOnChange(event)} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
