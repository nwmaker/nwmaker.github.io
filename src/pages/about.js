import React from 'react'
import './about.css'

export default () => (
  <div className='about-container'>
    <div className='about-item'>
      <div className='about-kits'>
        <h2>Electronics Craft</h2>
        <div>
          All kits may be available in different packages.
          <ul>
            <li>Kit: for the experienced</li>
            <li>Half-assembled: for beginners</li>
            <li>Fully-assembled: for the curious</li>
          </ul>
          Once you have the kit, either assembled or not, you will receive all the information about it.
        </div>
      </div>
    </div>
    <div className='about-item'>
      <div className='about-commissions'>
        <h2>Custom Work</h2>
        <div>
          If you need some customization for your need, contact us. 
          <ul>
            <li>Educational kits</li>
            <li>Promotional kits</li>
            <li>Personalized gifts</li>
            <li>... ...</li>
          </ul>
          Together we create a better experience and make it memorable.
        </div>
      </div>
    </div>
    <div className='about-item'>
      <div className='about-contacts'>
        <h2>Contact us</h2>
        <h2>
        <a className='contact-item' href='https://twitter.com/nwmaker'><i class='fa fa-twitter fa-2x'></i></a>
        <a className='contact-item' href='mailto:makernw@gmail.com'><i class='fa fa-envelope fa-2x'></i></a>
        <a className='contact-item' href='https://github.com/nwmaker'><i class='fa fa-github fa-2x'></i></a>
        </h2>
      </div>
    </div>
  </div>
)
