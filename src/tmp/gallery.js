import React from 'react'
import {
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Thumbnail from './thumbnail'
import Modal from './modal'

const Images = [
  { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
  { id: 1, title: "Lime Green", color: "LimeGreen" },
  { id: 2, title: "Tomato", color: "Tomato" },
  { id: 3, title: "Seven Ate Nine", color: "#789" },
  { id: 4, title: "Crimson", color: "Crimson" }
]

class Gallery extends React.Component {
  render() {
    return (  
      <div>
        {Images.map(i => (
        <Link
          key={i.id}
          to={{
            pathname: `/img/${i.id}`,
            state: { modal: true }
          }}>
          <Thumbnail color={i.color} />
          <p>{i.title}</p>
        </Link>
      ))}
      </div>
    )
  }
}

export default Gallery
