import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux';


let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>{/* обгортка для route */}
      <Provider store={store}>{/* провайдер, поставщик даних к дочерним елементам */}
        {/* value={store} тоисть всем дочерним компонентам будет доступерн через параметр value гловальная переменая store */}
        <App />
        {/* bind(store) - біндим у store бо ми його взяли у store, щоб всередині dispatch this був store  */}
      </Provider>
    </BrowserRouter>, document.getElementById('root'));
}

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});//callback function


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
