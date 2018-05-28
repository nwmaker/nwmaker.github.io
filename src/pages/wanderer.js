import React from 'react'
import { Column, Row } from 'simple-flexbox'
import './default-prod.css'

import GithubLogo from '../static/github32px.png'
import Wanderer1a from '../static/wanderer1a.png'
import Wanderer1b from '../static/wanderer1b.png'
import Wanderer1c from '../static/wanderer1c.png'

export default () => (
  <div>
    <div className='product-container'>
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1 className='product-header'>Wanderer</h1>
        </Row>
        <p>Wanderer flashes its LEDs all the time like it's flying. </p>
        <p>It pauses to display a random pattern when its antennae touch.</p>
        <p>Curious about this randomness? Check it out below.</p>
        <Row horizontal='center'>
          <a href='https://github.com/nwmaker/wanderer'>
            <img alt='github-logo'
              src={GithubLogo} />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/wanderer/'>
            <img className='product-image'
              src={Wanderer1a} alt='wanderer1a' />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/wanderer/'>
            <img className='product-image'
              src={Wanderer1b} alt='wanderer1b' />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/wanderer/'>
            <img className='product-image'
              src={Wanderer1c} alt='wanderer1c' />
          </a>
        </Row>
      </Column>
    </div>
  </div>
)
