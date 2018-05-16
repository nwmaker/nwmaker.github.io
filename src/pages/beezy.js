import React from 'react'
import { Column, Row } from 'simple-flexbox'
import './default-prod.css'

import GithubLogo from '../static/github32px.png'
import Beezy1a from '../static/beezy1a.png'
import Beezy1b from '../static/beezy1b.png'

export default () => (
  <div>
    <div className='product-container'>
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1 className='product-header'>Beezy</h1>
        </Row>
        <p>Beezy flashes its LEDs all the time because it's busy. </p>
        <p>It pauses to display a random pattern when its antennae touch.</p>
        <p>Curious about its clocking and randomness? Check it out below.</p>
        <Row horizontal='center'>
          <a href='https://github.com/nwmaker/beezy'>
            <img alt='github-logo'
              src={GithubLogo} />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/beezy/'>
            <img className='product-image'
              src={Beezy1a} alt='beezy1a' />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/beezy/'>
            <img className='product-image'
              src={Beezy1b} alt='beezy1b' />
          </a>
        </Row>
      </Column>
    </div>
  </div>
)
