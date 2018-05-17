import React from 'react';
import { connect } from 'react-redux';
import Home from './components/Home';
import Game from './components/Game';

const App = ({ paginaActual, navigateTo }) => {
  switch (paginaActual) {
    case 'pagina-1':
      return <Home
        navigateTo={navigateTo} />
    case 'pagina-2':
      return <Game
        navigateTo={navigateTo} />
    default:
      break;
  }
  return null
}

const mapStateToProps = ({ paginaActual }) => ({
  paginaActual
});

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (pagina) => {
    dispatch({
      type: 'NAVIGATE_TO',
      pagina
    })
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);