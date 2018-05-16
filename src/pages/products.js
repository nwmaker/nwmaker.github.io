import React from 'react'
import { Column, Row } from 'simple-flexbox'

import Modals from '../comps/modals'

import Beezy from './beezy'
import Bear from './bear'
import Ursaminor from './ursaminor'
import Smd0201 from './smd0201'

import Tindie from '../static/tindie-logo.png'
import Beezyp0 from '../static/beezy-p0.png'
import Bearp0 from '../static/bear-p0.png'
import Ursaminorp0 from '../static/ursaminor-p0.png'
import Smd0201p0 from '../static/smd0201-p0.png'

const photocomps = [
  [Beezyp0, Beezy],
  [Bearp0, Bear],
  [Ursaminorp0, Ursaminor],
  [Smd0201p0, Smd0201],
]

export default ({ match }) => (
  <div className='products-container'>
    <Column flexGrow={1}>
      <Row horizontal='center'>
        <h1>Electronics Crafts</h1>
      </Row>
      <Row horizontal='center'>
        <a href='https://www.tindie.com/stores/nwmaker/'>
          <img alt='tindie-store'
               width='64' height='64'
               src={Tindie} />
        </a>
      </Row>
      <Row vertical='center'>
        {photocomps.map((c, i) => (
          <Column key={i} flexGrow={1} horizontal='center'>
            <Modals Index={i} Photo={c[0]} CompToShow={c[1]} />
          </Column>
        ))}
      </Row>
    </Column>
  </div>
)
