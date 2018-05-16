import React from 'react'
import { Column, Row } from 'simple-flexbox'
import './default-prod.css'

import GithubLogo from '../static/github32px.png'
import Bear1a from '../static/bear1a.png'
import Bear1b from '../static/bear1b.png'

export default () => (
  <div>
    <div className='product-container'>
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1 className='product-header'>Wearable Bear</h1>
        </Row>
        <p>A bear with a pin to wear and two buttons to play</p>
        <Row horizontal='center'>
          <a href='https://github.com/nwmaker/wearable-bear'>
            <img alt='github-logo'
              src={GithubLogo} />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/wearable-bear-badge/'>
            <img className='product-image'
              src={Bear1a} alt='bear1a' />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/wearable-bear-badge/'>
            <img className='product-image'
              src={Bear1b} alt='bear1b' />
          </a>
        </Row>
      </Column>
    </div>
  </div>
)
