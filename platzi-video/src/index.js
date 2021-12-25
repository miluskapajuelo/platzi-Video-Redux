import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers'
import App from './App';
import initialState from './utils/data'

/* const initialState = useInitialState("https://raw.githubusercontent.com/xsrpm/frontend-nodejs/master/platzi-video/initialState.json")
 *//* 
 */
const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhansers())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);