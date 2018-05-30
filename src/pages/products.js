import React from 'react'
import Modals from '../comps/modals'

import Wanderer from './wanderer'
import Beezy from './beezy'
//import Bear from './bear'
import Ursaminor from './ursaminor'
import Smd0201 from './smd0201'

import Tindie from '../static/tindie-logo.png'
import Wandererp0 from '../static/wanderer-p0.png'
import Beezyp0 from '../static/beezy-p0.png'
//import Bearp0 from '../static/bear-p0.png'
import Ursaminorp0 from '../static/ursaminor-p0.png'
import Smd0201p0 from '../static/smd0201-p0.png'

import './products.css'

const photocomps = [
  [Wandererp0, Wanderer],
  [Beezyp0, Beezy],
  [Ursaminorp0, Ursaminor],
  [Smd0201p0, Smd0201],
]

export default () => (
  <div className='products-container'>
    <h1 className='products-heading'>Electronics Crafts</h1>
    <div className='products-tindie'>
      <a href='https://www.tindie.com/stores/nwmaker/'>
        <img alt='tindie-store'
             width='64' height='64'
             src={Tindie} />
      </a>
    </div>
    <div className='gallery-container'>
        {photocomps.map((c, i) => (
          <Modals Index={i} Photo={c[0]} CompToShow={c[1]} />
        ))}
    </div>
  </div>
)
