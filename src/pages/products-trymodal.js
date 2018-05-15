import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
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

const Products = ({ match }) => (
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
          <Link to={`${match.url}/bear`}>
            <div>
              <img alt='bear'
                src={Bearp0} />
            </div>
          </Link>
          <span>Wearable Bear</span>
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
   
    <div href='#beezy'> 
      <Route path={`${match.url}/beezy`} component={Beezy} />
    </div>
    <div href='#bear'> 
      <Route path={`${match.url}/bear`} component={Bear} />
    </div>
    <div href='#ursaminor'> 
      <Route path={`${match.url}/ursaminor`} component={Ursaminor} />
    </div>
    <div href='#smd0201'> 
      <Route path={`${match.url}/smd0201`} component={Smd0201} />
    </div>
  </div>
)

class ModalSwitch extends React.Component {
  previousLocation = this.props.location

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { location } = this.props
    console.log('ModalSwitch:', this.props)
    console.log('location.state:', location.state)
    console.log('previous location:', this.previousLocation)
    console.log('current location:', location)

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    )
    console.log('isModal:', isModal)

    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path='/products' component={Home} />
          <Route path='/products/gallery' component={Gallery} />
          <Route path='/products/img/:id' component={ImageView} />
        </Switch>
        {isModal ? <Route path='/products/img/:id' component={Modal} /> : null}
      </div>
    )
  }
}

const IMAGES = [
  { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
  { id: 1, title: "Lime Green", color: "LimeGreen" },
  { id: 2, title: "Tomato", color: "Tomato" },
  { id: 3, title: "Seven Ate Nine", color: "#789" },
  { id: 4, title: "Crimson", color: "Crimson" }
]

const Thumbnail = ({ color }) => (
  <div
    style={{
      width: 50,
      height: 50,
      background: color
    }}
  />
)

const Image = ({ color }) => (
  <div
    style={{
      width: "100%",
      height: 400,
      background: color
    }}
  />
)

const Home = () => (
  <div>
    <Link to="/products/gallery">Visit the Gallery</Link>
    <h2>Featured Images</h2>
    <ul>
      <li>
        <Link to="/products/img/2">Tomato</Link>
      </li>
      <li>
        <Link to="/products/img/4">Crimson</Link>
      </li>
    </ul>
  </div>
);

const Gallery = () => (
  <div>
    {IMAGES.map(i => (
      <Link
        key={i.id}
        to={{
          pathname: `/products/img/${i.id}`,
          // this is the trick!
          state: { modal: true }
        }}
      >
        <Thumbnail color={i.color} />
        <p>{i.title}</p>
      </Link>
    ))}
  </div>
)

const ImageView = ({ match }) => {
  const image = IMAGES[parseInt(match.params.id, 10)];
  if (!image) {
    return <div>Image not found</div>;
  }

  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} />
    </div>
  );
}

const Modal = ({ match, history }) => {
  const image = IMAGES[parseInt(match.params.id, 10)];
  if (!image) {
    return null;
  }
  const back = e => {
    e.stopPropagation();
    history.goBack();
  }

  console.log('Modal-match:', match)
  console.log('Modal-history:', history)

  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444"
        }}
      >
        <h1>{image.title}</h1>
        <Image color={image.color} />
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
}

const ModalProducts = () => (
  <Router>
    <Route component={ModalSwitch} />
  </Router>
)

export default ModalProducts
