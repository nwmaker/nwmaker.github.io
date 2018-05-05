import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'

const Product = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default ({ match }) => (
  <div>
    <h2>Products</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Product}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)
