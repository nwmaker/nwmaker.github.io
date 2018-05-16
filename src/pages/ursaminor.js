import React from 'react'
import { Column, Row } from 'simple-flexbox'
import './default-prod.css'

import GithubLogo from '../static/github32px.png'
import Ursaminor1a from '../static/ursaminor1a.png'

export default () => (
  <div>
    <div className='product-container'>
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1 className='product-header'>Ursa Minor</h1>
        </Row>
        <p>A polar cub with the Ursa Minor twinkling ... </p>
        <Row horizontal='center'>
          <a href='https://github.com/nwmaker/ursaminor'>
            <img alt='github-logo'
              src={GithubLogo} />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/ursaminor-soldering-kit/'>
            <img className='product-image'
              src={Ursaminor1a} alt='ursaminor1a' />
          </a>
        </Row>
      </Column>
    </div>
  </div>
)
