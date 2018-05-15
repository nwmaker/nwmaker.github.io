import React from 'react'
import {
  Router,
  Route,
} from 'react-router-dom'
import Top from './pages/top'
import './App.css'

export default () => (
  <Router>
    <Route component={Top} />
  </Router>
)
