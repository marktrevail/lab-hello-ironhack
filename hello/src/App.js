import React, { Component } from 'react';
import Nav from './components/Nav.js';
import Jumbotron1 from './components/Jumbotron1.js';
import Heading1 from './components/Heading1.js';
import Button1 from './components/Button1.js';
import Jumbotron2 from './components/Jumbotron2.js';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className='App'>

        <Nav />

        <Jumbotron1>
          <Heading1 />
          <Button1 />
        </ Jumbotron1>

        <Jumbotron2>
        </ Jumbotron2>


      </div>
    );
  }

}

export default App;
