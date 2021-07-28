import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./reduxstore/store";
import {Provider} from "react-redux";
import myStore from "./reduxstore/store";
import {BrowserRouter} from "react-router-dom";


//SInce below we have passed store as prop to App Component, now prop object contains all methods present in store like dispatch(), getState() etc, which now cann be accessed by all the components within App Component
ReactDOM.render(
  <BrowserRouter>
  <Provider store={myStore}> 
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
