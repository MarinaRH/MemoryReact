
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const reducer=(state,action)=>{

  switch (action.type) {
		case 'NAVIGATE_TO':
			return {
				...state,
				paginaActual: action.pagina
			}
		default:
			return state;
	}
};

const initialState = {
  seccion: '',
  paginaActual: 'pagina-1'
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
)
