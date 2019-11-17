import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route} from "react-router-dom";


let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>{/* обгортка для route */}
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
      {/* bind(store) - біндим у store бо ми його взяли у store, щоб всередині dispatch this був store  */}
    </BrowserRouter>, document.getElementById('root'));
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);//callback function


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
