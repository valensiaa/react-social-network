import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import {addPost, updateNewPostText} from './redux/state';

let reRenderEntireTree = (state) => {
  ReactDOM.render(
  <BrowserRouter>
    <App 
    state = {state} 
    addPost = {addPost}
    updateNewPostText={updateNewPostText}
    />
  </BrowserRouter>,
  document.getElementById('root'));
}

reRenderEntireTree(state)
subscribe(reRenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
