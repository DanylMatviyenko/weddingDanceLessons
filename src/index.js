import 'url-polyfill';
import babelPolyfill from 'babel-polyfill';
//assets
import './assets';
//header expand functionality
import './modules/header.js';
if (process.env.NODE_ENV === 'development') {
  require('./index.html');
}
if (module.hot) {
   module.hot.accept();
}


