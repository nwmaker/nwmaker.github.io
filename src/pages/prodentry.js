import React from 'react'
import {
  Router,
  Route,
  Switch
} from 'react-router-dom'
import Modal from '../tmp/modal'
import Gallery from '../tmp/gallery'

class Entry extends React.Component {
  previousLocation = this.props.location

  componentWillUpdate(nextProps) {
    const { location } = this.props
    
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    const { location } = this.props

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    )

    return (  
      <div>
        <Switch location={isModal ? this.previousLocation : location }>
          <Route exact path='/products' component={Gallery} />
        </Switch>
        {isModal ? <Route path='/img/:id' component={Modal} /> : null}
      </div>
    )
  }
}

const Products = ({match, history}) => (
  <Router>
    <Route component={Entry} />
  </Router>
)

export default Products
