import React from 'react';
import { connect } from 'react-redux';

const Home = ({ navigateTo }) => (
  
      <div>
        <div className="Home">
        </div>
        <button className="Game-btn" onClick={() => { navigateTo('pagina-2') }}>¡Jugar Ahora!</button>
      </div>
    
)
export default connect(
  (state) => ({

  }),
  (dispatch) => ({
    navigateTo: (pagina) => {
      dispatch({
        type: 'NAVIGATE_TO',
        pagina
      })
    }
  })
)(Home)