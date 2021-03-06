import React from 'react';
import ReactDOM from 'react-dom';
import './style/App.css';
import reportWebVitals from './reportWebVitals';
import PostsContainer from "./components/PostsContainer";

ReactDOM.render(
      <PostsContainer/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
