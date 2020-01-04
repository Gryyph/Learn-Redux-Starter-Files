import React from 'react';
import {render} from 'react-dom';

//import CSS
import css from './styles/style.styl';

//import componenets
import Main from './components/main.js';
import Single from './components/single.js';
import PhotoGrid from './components/photogrid.js';

//import react router dependencies
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

//import store
import store, {history} from './store'

const router = (
  <Router history = {browserHistory}>
    <Route path = '/' component = {Main}>
      <IndexRoute component = {PhotoGrid}></IndexRoute>
      <Route path = "/view/:postId" component = {Single}></Route>

    </Route>



  </Router>


)


render (router, document.getElementById('root'));