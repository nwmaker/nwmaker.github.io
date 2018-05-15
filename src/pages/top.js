import React from 'react'
import {
  Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Analytics from 'react-router-ga'

import Home from '../pages/home'
import About from '../pages/about'
//import Products from '../pages/products'
import Gallery from '../pages/gallery'
import Modal from '../comps/items'

import Footer from '../layout/footer'

const history = createBrowserHistory();

const CustomMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <div className={match ? "item active" : "item"}>
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
)

class App extends React.Component {
 
  previousLocation = this.props.location;

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
    const { location } = this.props;

    const isModal = !!(this.previousLocation !== location);

    console.log('curr location:', location)
    console.log('prev location:', this.previousLocation)

    return (
      <Router history={history}>
        <div>
        <Analytics id="UA-118045706-1">
          <div className='nav-container'>
            <div className='nav'>
              <CustomMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
              <CustomMenuLink to="/products" label="Products" />
              <CustomMenuLink to="/about" label="About" />
            </div>
          </div>
          <Switch location={isModal ? this.previousLocation : location }> 
            <Route exact path="/" component={Home}/>
            <Route path="/products" component={Gallery}/>
            <Route path="/about" component={About}/>
          </Switch>
          {isModal ? <Route path='/img/:id' component={Modal} /> : null }
          <Footer />
        </Analytics>
        </div>
      </Router>
    );
  }
}

export default App;
