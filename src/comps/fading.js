import React from 'react'
import Carousel from './carousel.js'
import './fading.css'

import Beezy from '../static/beezy-front.png'
import Smd0201 from '../static/smd0201-front.png'
//import Monarch from '../static/monarch-front.png'
import Wanderer from '../static/wanderer-front.png'
//import Ursaminor from '../static/ursaminor-front.png'
//import Bear from '../static/bear-front.png'
import Owl from '../static/owl-front2.png'
import Snowflake from '../static/snowflake-front.png'
import Citrus0 from '../static/citrus0-front.png'
import Snowy from '../static/snowy-front.png'

const images = [
  Beezy,
  Snowy,
  Smd0201,
  Wanderer,
  Owl,
  Citrus0,
  Snowflake,
]

const messages = [
  'Curiosity',
  'Awesome',
  'Challenge',
  'Experience',
  'Gift',
  'Exploration',
  'Moment',
]

export default () => (
  <div className='fading'>
    <div className='fade-header'>
      <h1>Electronics Crafts Together</h1>
      <h2>Unique. Distinctive. Beautiful.</h2>
    </div>
    <Carousel images={images} messages={messages} />
  </div>
)
