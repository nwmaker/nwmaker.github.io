import React from 'react'
import Modal from 'react-modal'
//import './modals.css'

Modal.setAppElement('#root')

class Modals extends React.Component {
  constructor() {
    super()

    this.state = {
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    const { Index, Photo, CompToShow } = this.props

    return (
      <div key={Index*10+1} className='modals'>
        <div ky={Index*50+5} className='image-container'>
          <input key={Index*20+2} type='image' src={Photo} alt='modal'
            onClick={this.handleOpenModal} />
        </div>
        <Modal key={Index*30+3}
          isOpen={this.state.showModal}
          contentLabel="Modal Gallery">
          <i key={Index*40+4} className='fa fa-close fa-2x' 
            onClick={this.handleCloseModal}></i>
          <CompToShow />
        </Modal>
      </div>
    )
  }
}

export default Modals
