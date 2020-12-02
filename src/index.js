import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Helmet} from "react-helmet"
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Majd Ajroudi</title>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
