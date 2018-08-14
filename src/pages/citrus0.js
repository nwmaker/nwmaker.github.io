import React from 'react'
import { Column, Row } from 'simple-flexbox'
import './default-prod.css'

import GithubLogo from '../static/github32px.png'
import Citrus01a from '../static/citrus01a.png'
import Citrus01b from '../static/citrus01b.png'

export default () => (
  <div>
    <div className='product-container'>
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1 className='product-header'>Citrus0</h1>
        </Row>
        <p> Citrus0 is a two-piece beauty for starter with ARM Cortex-M0. </p>
        <Row horizontal='center'>
          <a href='https://github.com/nwmaker/citrus'>
            <img alt='github-logo'
              src={GithubLogo} />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/citrus0/'>
            <img className='product-image'
              src={Citrus01a} alt='citrus01a' />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/citrus0/'>
            <img className='product-image'
              src={Citrus01b} alt='citrus01b' />
          </a>
        </Row>
      </Column>
    </div>
  </div>
)
