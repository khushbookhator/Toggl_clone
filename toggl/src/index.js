import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Routers} from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import { store } from './Redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Routers basename="/">
      <Provider store={store}>
        <App />
      </Provider>
    </Routers>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
