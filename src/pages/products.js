import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import { Column, Row } from 'simple-flexbox'

import Beezy from './beezy'
import Bear from './bear'
import Ursaminor from './ursaminor'
import Smd0201 from './smd0201'

import Tindie from '../static/tindie-logo.png'
import Beezyp0 from '../static/beezy-p0.png'
import Bearp0 from '../static/bear-p0.png'
import Ursaminorp0 from '../static/ursaminor-p0.png'
import Smd0201p0 from '../static/smd0201-p0.png'

export default ({ match }) => (
  <div className='products-container'>
    <Column flexGrow={1}>
      <Row horizontal='center'>
        <h1>Electronic Craft</h1>
      </Row>
      <Row horizontal='center'>
        <a href='https://www.tindie.com/stores/nwmaker/'>
          <img alt='tindie-store'
               width='64' height='64'
               src={Tindie} />
        </a>
      </Row>
      <Row vertical='center'>
        <Column flexGrow={1} horizontal='center'>
          <Link to={`${match.url}/beezy`}>
            <div>
              <img alt='beezy-assembled'
                src={Beezyp0} />
            </div>
          </Link>
          <span>Beezy</span>
        </Column>
        <Column flexGrow={1} horizontal='center'>
          <Link to={`${match.url}/bearable`}>
            <div>
              <img alt='bearable'
                src={Bearp0} />
            </div>
          </Link>
          <span>Bearable</span>
        </Column>
      </Row>
      <Row vertical='center'>
        <Column flexGrow={1} horizontal='center'>
          <Link to={`${match.url}/ursaminor`}>
            <div>
              <img alt='walking-ursaminors'
                src={Ursaminorp0} />
            </div>
          </Link>
          <span>Ursa Minor</span>
        </Column>
        <Column flexGrow={1} horizontal='center'>
          <Link to={`${match.url}/smd0201`}>
            <div>
              <img alt='smd0201-pcb'
                src={Smd0201p0} />
            </div>
          </Link>
          <span>SMD 0201 Challenge</span>
        </Column>
      </Row>
    </Column>

    <Route path={`${match.url}/beezy`} component={Beezy} />
    <Route path={`${match.url}/bearable`} component={Bear} />
    <Route path={`${match.url}/ursaminor`} component={Ursaminor} />
    <Route path={`${match.url}/smd0201`} component={Smd0201} />

  </div>
)
