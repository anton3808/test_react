import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {addPost} from './redux/state';
import {BrowserRouter, Route} from "react-router-dom";


export let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>{/* обгортка для route */}
      <App state={state} addPost={addPost} />
    </BrowserRouter>, document.getElementById('root'));
}
