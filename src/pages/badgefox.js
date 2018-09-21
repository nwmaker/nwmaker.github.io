import React from 'react'
import { Column, Row } from 'simple-flexbox'
import './default-prod.css'

import GithubLogo from '../static/github32px.png'
import Badgefox1a from '../static/badgefox1a.png'
import Badgefox1b from '../static/badgefox1b.png'

export default () => (
  <div>
    <div className='product-container'>
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1 className='product-header'>Badgefox</h1>
        </Row>
        <p>Badgefox has beautiful green eyes blinking all the time. </p>
        <Row horizontal='center'>
          <a href='https://github.com/nwmaker/badgefox'>
            <img alt='github-logo'
              src={GithubLogo} />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/badgefox/'>
            <img className='product-image'
              src={Badgefox1a} alt='badgefox1a' />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/badgefox/'>
            <img className='product-image'
              src={Badgefox1b} alt='badgefox1b' />
          </a>
        </Row>
      </Column>
    </div>
  </div>
)
