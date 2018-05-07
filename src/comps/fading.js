import React from 'react'
import Carousel from './carousel.js'
import './fading.css'

import Beezy from '../static/beezy-front.png'
import Smd0201 from '../static/smd0201-front.png'
import Monarch from '../static/monarch-front.png'
import Ursaminor from '../static/ursaminor-front.png'
import Bear from '../static/bear-front.png'
import Snowflake from '../static/snowflake-front.png'

const images = [
  Beezy,
  Smd0201,
  Monarch,
  Ursaminor,
  Bear,
  Snowflake,
]

const messages = [
  'Curiosity',
  'Challenge',
  'Experience',
  'Exploration',
  'Gift',
  'Moment',
]

export default () => (
  <div className='fading'>
    <div className='fade-header'>
      <h1>Electronic Craft</h1>
      <h2>Unique. Distinctive. Beautiful.</h2>
    </div>
    <Carousel images={images} messages={messages} />
  </div>
)
