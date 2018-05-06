import React from 'react'
import Logo from '../comps/logo'
import './footer.css'

export default () => (
  <div className='footer'>
    <div className='footer-container'>
      <div className='copyright'>
        {'Copyright NWMaker Ltd. 2018'}
      </div>
      <a href='http://nwmaker.com'>
        <Logo />
      </a>
    </div>
  </div>
)
