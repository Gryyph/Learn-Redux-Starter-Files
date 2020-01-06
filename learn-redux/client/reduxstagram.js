import React from 'react';
import {render} from 'react-dom';

//import CSS
import css from './styles/style.styl';

//import componenets
import App from './components/app';
import Single from './components/single.js';
import PhotoGrid from './components/photogrid.js';

//import react router dependencies
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

//import store
import store, {history} from './store'

const router = (
  <Provider store={store}>
    <Router history = {history}>
      <Route path = '/' component = {App}>
        <IndexRoute component = {PhotoGrid}></IndexRoute>
        <Route path = "/view/:postId" component = {Single}></Route>
      </Route>
    </Router>
  </Provider>

)


render (router, document.getElementById('root'));