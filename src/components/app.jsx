import React, { Component } from 'react';
import FlatList from './flat-list';
import Flat from './flat';
import flats from '../data/flats';

class App extends Component {
  render() {
    return (
      <div>
        <FlatList flats={flats} />
      </div>
    );
  };
}

export default App;
