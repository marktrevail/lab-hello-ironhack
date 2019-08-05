import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        <img src='/images/ironhack-logo.svg' alt="ironhack_logo"></img>
        <img src='/images/menu-top.svg' alt="menu-button"></img>
      </div>
    )
  }
}


export default Nav;