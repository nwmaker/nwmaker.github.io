import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Products from './pages/products'

import Footer from './layout/footer'

export default () => (
  <Router>
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
