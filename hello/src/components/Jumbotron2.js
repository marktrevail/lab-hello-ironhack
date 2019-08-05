import React, { Component } from 'react';
import './Jumbotron2.css';

class Jumbotron2 extends Component {
  render() {
    return (
      <div className='Jumbotron2'>
        
        {this.props.children}
  
      </div>
    )
  }
}


export default Jumbotron2;