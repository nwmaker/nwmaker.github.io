import React from 'react'
import { Column, Row } from 'simple-flexbox'
import './default-prod.css'

import GithubLogo from '../static/github32px.png'
import Owla from '../static/owla.png'
import Owlb from '../static/owlb.png'

export default () => (
  <div>
    <div className='product-container'>
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1 className='product-header'>Blinky Owl</h1>
        </Row>
        <p> Ready to solder SMD? </p>
        <Row horizontal='center'>
          <a href='https://github.com/nwmaker/starter-owl'>
            <img alt='github-logo'
              src={GithubLogo} />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/blinkyowl/'>
            <img className='product-image'
              src={Owla} alt='owla' />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/blinkyowl/'>
            <img className='product-image'
              src={Owlb} alt='owlb' />
          </a>
        </Row>
      </Column>
    </div>
  </div>
)
