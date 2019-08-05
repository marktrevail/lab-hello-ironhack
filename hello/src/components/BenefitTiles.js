import React, { Component } from 'react';
import './BenefitTiles.css';
import BenefitTile from './BenefitTile.js';

// Define BenefitTile content

let tileData = [
  {
      image: "icon1.png",
      title: "Declarative",
      description: "React makes it painless to create interactive UIs."
  },
  {
      image: "icon2.png",
      title: "Components",
      description: "Build encapsulated components that manage their state."
  },
  {
      image: "icon3.png",
      title: "Single-Way",
      description: "A set of immutable values are passed to the components"
  },
  {
      image: "icon4.png",
      title: "JSX",
      description: "Statically-typed, designed to run on modern browsers."
  }
] ;


// Create set of BenefitTile components

let tileComponents = tileData.map((tile)=> {
  return (
      <BenefitTile 
          image={tile.image}
          title={tile.title}
          description={tile.description}
      />
  )
});

// Put these tiles inside a container (called "BenefitTiles") and export as a class

class BenefitTiles extends Component {
  render() {
    return (
      <div className='BenefitTiles'>
        
        {tileComponents}
  
      </div>
    );
  }
}


export default BenefitTiles;