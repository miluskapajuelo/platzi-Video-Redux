import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'
import App from './App';
import initialState from './utils/data'
/* const initialState = useInitialState("https://raw.githubusercontent.com/xsrpm/frontend-nodejs/master/platzi-video/initialState.json")
 *//* 
 */
const store = createStore(reducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);