import React from 'react'
import { Column, Row } from 'simple-flexbox'
import './default-prod.css'

import GithubLogo from '../static/github32px.png'
import Smd02011a from '../static/smd02011a.png'
import Smd02011b from '../static/smd02011b.png'

export default () => (
  <div>
    <div className='product-container'>
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1 className='product-header'>SMD 0201 Challenge</h1>
        </Row>
        <p> Ready to take the challenge to solder 0201 SMD? </p>
        <Row horizontal='center'>
          <a href='https://github.com/nwmaker/smd0201'>
            <img alt='github-logo'
              src={GithubLogo} />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/smd-0201-soldering-challenge/'>
            <img className='product-image'
              src={Smd02011a} alt='smd02011a' />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/smd-0201-soldering-challenge/'>
            <img className='product-image'
              src={Smd02011b} alt='smd02011b' />
          </a>
        </Row>
      </Column>
    </div>
  </div>
)
