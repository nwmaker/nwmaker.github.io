import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import { Column, Row } from 'simple-flexbox'

import Modal from '../comps/items'

import Beezy from './beezy'
import Bear from './bear'
import Ursaminor from './ursaminor'
import Smd0201 from './smd0201'

import Tindie from '../static/tindie-logo.png'
import Beezyp0 from '../static/beezy-p0.png'
import Bearp0 from '../static/bear-p0.png'
import Ursaminorp0 from '../static/ursaminor-p0.png'
import Smd0201p0 from '../static/smd0201-p0.png'

const IMAGES = [
  { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
  { id: 1, title: "Lime Green", color: "LimeGreen" },
  { id: 2, title: "Tomato", color: "Tomato" },
  { id: 3, title: "Seven Ate Nine", color: "#789" },
  { id: 4, title: "Crimson", color: "Crimson" }
]

export default ({ match }) => (
  <div className='product-gallery'>
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
        <div>{
          IMAGES.map(i => (
            <Column flexGrow={1} horizontal='center'>
            <Link key={i.id} 
                  to={{
                       pathname: `/img/${i.id}`,
                       state: {modal: true}
                     }}>
              <p>{i.title}</p>
            </Link>
            </Column>
          ))
        }</div>
      </Row>
    </Column>
    <Route path='/img/:id' component={Modal} />
  </div>
)
