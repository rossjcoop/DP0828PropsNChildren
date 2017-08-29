import React, { Component } from 'react';
import '../styles/app.css';
import BaseLayout from './BaseLayoutComp';




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Layout">
        <BaseLayout />
        </div>
      </div>
    );
  }
}

export default App;