import React from 'react'
import {
  Router,
  Route,
  Link
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
//import { slide as Menu } from 'react-burger-menu'
import Analytics from 'react-router-ga'

import Home from './pages/home'
import About from './pages/about'
import Products from './pages/products'
//import Products from './pages/prodentry'

import Footer from './layout/footer'
import './App.css'

const history = createBrowserHistory();

const CustomMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <div className={match ? "item active" : "item"}>
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
)

export default () => (
  <Router history={history}>
    <div>
    <Analytics id="UA-118045706-1">
      <div className='nav-container'>
        <div className='nav'>
          <CustomMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
          <CustomMenuLink to="/products" label="Products" />
          <CustomMenuLink to="/about" label="About" />
        </div>
      </div>

      <Route exact path="/" component={Home}/>
      <Route path="/products" component={Products}/>
      <Route path="/about" component={About}/>
      
      <Footer />
    </Analytics>
    </div>
  </Router>
)
