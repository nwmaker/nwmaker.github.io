import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

class Test extends React.Component {
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
    const { Photo, CompToShow } = this.props

    return (
      <div>
        <button onClick={this.handleOpenModal}>
          <img src={Photo} alt='modal' />
        </button>
        <Modal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
          <CompToShow />
        </Modal>
      </div>
    )
  }
}

export default Test
