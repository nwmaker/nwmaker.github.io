import React from 'react'
import { Menu } from '../comps/menu'
import styles from './default.css'

export default ({props}) => (
  <div className={styles.default}>
    <header>
      Header
      <Menu />
    </header>
    <main className={styles.main}>
      {props.children}
    </main>
    <footer>
      Footer
    </footer>
  </div>
)
