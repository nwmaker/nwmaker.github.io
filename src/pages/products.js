import React from 'react'
import Modals from '../comps/modals'

import Wanderer from './wanderer'
import Beezy from './beezy'
//import Bear from './bear'
import Ursaminor from './ursaminor'
import Smd0201 from './smd0201'
import Owl from './owl'
import Citrus0 from './citrus0'

import Tindie from '../static/tindie-logo.png'
import Wandererp0 from '../static/wanderer-p0.png'
import Beezyp0 from '../static/beezy-p0.png'
//import Bearp0 from '../static/bear-p0.png'
import Ursaminorp0 from '../static/ursaminor-p0.png'
import Smd0201p0 from '../static/smd0201-p0.png'
import Owlp0 from '../static/owl-p0.png'
import Citrus0p0 from '../static/citrus0-p0.png'

import './products.css'

const photocomps = [
  [Citrus0p0, Citrus0],
  [Beezyp0, Beezy],
  [Owlp0, Owl],
  [Smd0201p0, Smd0201],
  [Wandererp0, Wanderer],
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
