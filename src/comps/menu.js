import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './menu.css'

export default () => (
  <div className={styles.menu}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/products">Products</NavLink>
    <NavLink to="/about">About</NavLink>
  </div>
)
