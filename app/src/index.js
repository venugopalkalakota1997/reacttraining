import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";
import allReducers from './reducers/combinedreducer';
import { Provider } from "react-redux";

const reduxStore = createStore(allReducers)
ReactDOM.render(
  <Provider store={reduxStore}>
      <App />
  </Provider> ,
  document.getElementById('root')
);


