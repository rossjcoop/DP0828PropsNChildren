import React, { Component } from 'react';


class ChildComponent extends Component {
	

  render() {
    return (
      // <div>Dumb Component receiving Props
      	<div className="submit">
	        <div>
	          <input type="submit" onClick={this.props.onClick} className="submitButton"/>
	        </div>
      </div>
    );
  }
}


export default ChildComponent