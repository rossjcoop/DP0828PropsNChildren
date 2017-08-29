import React, { Component } from 'react';


class DisplayComponent extends Component {
	
  render() {
    return (
      <div className = "funH1">
      <h1>State, Props, Children, Function, Fun!</h1>
      <h1>{this.props.sayWhat}</h1>
      </div>
    );
  }
}


export default DisplayComponent