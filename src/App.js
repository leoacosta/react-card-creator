import React, { Component } from 'react';
import PosterTitle from './components/PosterTitle'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PosterTitle cardCat="Tango" PosterTitle="Buenos Aires" />
      </div>
    );
  }
}

export default App;
