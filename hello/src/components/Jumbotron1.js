import React, { Component } from 'react';
import './Jumbotron1.css';

class Jumbotron1 extends Component {
  render() {
    return (
      <div className='Jumbotron1'>
        
        {this.props.children}
  
      </div>
    )
  }
}


export default Jumbotron1;