import React, { Component } from 'react';
import Cards from './Cards.js';

class Game extends Component {
  
  render() {
    return(
      <div>
        <h1> MEMORY GAME </h1>
        <Cards />
      </div>
    )}
}
export default Game;
