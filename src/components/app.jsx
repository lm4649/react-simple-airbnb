import React, { Component } from 'react';
import FlatList from './flat-list';
import Flat from './flat';
import GoogleMap from './map'
import flats from '../data/flats';

class App extends Component {
  render() {
    return (
      <div>
        <FlatList flats={flats} />
        <GoogleMap />
      </div>
    );
  };
}

export default App;
