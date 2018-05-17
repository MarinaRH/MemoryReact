import React, { Component } from 'react';
import Cards from './Cards';

class Game extends Component {
  
  render() {
    return(
      <div>
        <h1 className="center"> MEMORY GAME </h1>
        <Cards />
      </div>
    )}
}
export default Game;
