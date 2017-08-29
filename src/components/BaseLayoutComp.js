import React, { Component } from 'react';
import Header from './HeaderComp';
import Footer from './FooterComp';
import ParentComponent from './ParentComp';
import '../styles/app.css';


class BaseLayout extends Component {

  render() {
    return (
      <div className="main">
        <div className="mainHeader">
	        <Header>

	        </Header>
      	</div>
      	<div className="mainBody">
      		<ParentComponent>

      		</ParentComponent>
      	</div>
      	<div className="mainFooter">
	        <Footer>

	        </Footer>
      	</div>
      {//This should house Header and Footer components and be able to house any children components.
      }
      </div>
    );
  }
}

export default BaseLayout