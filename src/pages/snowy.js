import React from 'react'
import { Column, Row } from 'simple-flexbox'
import './default-prod.css'

import GithubLogo from '../static/github32px.png'
import Wanderer1a from '../static/snowy1a.png'
import Wanderer1b from '../static/snowy1b.png'
import Wanderer1c from '../static/snowy1c.png'

export default () => (
  <div>
    <div className='product-container'>
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1 className='product-header'>Snowy Owl</h1>
        </Row>
        <p>Add custom text to make an owlsome and unique gift. </p>
        <p>Blinking Snowy is cute and wearable. </p>
        <Row horizontal='center'>
          <a href='https://github.com/nwmaker/PurpleSnowy'>
            <img alt='github-logo'
              src={GithubLogo} />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/snowyowl1/'>
            <img className='product-image'
              src={Wanderer1a} alt='snowy1a' />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/snowyowl2/'>
            <img className='product-image'
              src={Wanderer1b} alt='snowy1b' />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/snowytwin/'>
            <img className='product-image'
              src={Wanderer1c} alt='snowy1c' />
          </a>
        </Row>
      </Column>
    </div>
  </div>
)
