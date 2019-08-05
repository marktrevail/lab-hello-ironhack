import React, { Component } from 'react';
import './BenefitTile.css';

class BenefitTile extends Component {
  render() {
    return (
      <div className='BenefitTile'>

        <img src={"/images/" + this.props.image} alt={this.props.image} ></img>

        <h2>{this.props.title}</h2>

        <aside>{this.props.description}</aside>

      </div>
    );
  }
}

export default BenefitTile;