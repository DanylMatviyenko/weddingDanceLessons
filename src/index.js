import 'url-polyfill';
import babelPolyfill from 'babel-polyfill';
//wow.js
import './modules/wow';
//assets
import './assets';
//header expand functionality
import './modules/header.js';
//off animation on mobile devices
import './modules/animationControl';
//swiper
import './modules/swiper'
if (process.env.NODE_ENV === 'development') {
  require('./index.html');
}
if (module.hot) {
   module.hot.accept();
}
window.onload = function() {
    document.querySelector('.body').classList.remove('body_initial-hidden');
}
//show body


