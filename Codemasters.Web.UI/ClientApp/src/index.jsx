import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TagManager from 'react-gtm-module';
import AOS from 'aos';
import 'aos/dist/aos.css'

import './assets/sass/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const tagManagerArgs = {
  gtmId: 'GTM-WVM9XTF'
}

TagManager.initialize(tagManagerArgs);

AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
