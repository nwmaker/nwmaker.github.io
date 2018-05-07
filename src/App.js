import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Home from './pages/home'
import About from './pages/about'
import Products from './pages/products'

import Footer from './layout/footer'
import './App.css'

const history = createBrowserHistory();
/*
const initGA = (history) => {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-118045706-1', 'auto');
  ga('send', 'pageview');

  history.listen((location) => {
    console.log("tracking page view: " + location.pathname);
    ga('send', 'pageview', location.pathname);
  });
};

initGA(history);
*/

export default () => (
  <Router history={history}>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/products" component={Products}/>
      
      <hr />
      
      <Footer />
    </div>
  </Router>
)
