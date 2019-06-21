import React, { Component } from 'react';

class ReviewInput extends Component {
  
  state = {
    text: ''
  }

  handleOnChange = event => {
  
    this.setState({
      text: event.target.value
    })
  }
  
  handleOnSubmit = event => {
    event.preventDefault()
  
    this.props.addReview({ 
      text: this.state.text, 
      restaurantId: this.props.restaurantId })
  }

  
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} >
          Add Review
          <input
          type="text"
          value={this.state.text}
          onChange={this.handleOnChange}
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
