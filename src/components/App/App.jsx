import React, { Component } from 'react';

// import Box from 'components/Box';
import Modal from 'components/Modal';

export class App extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          Open
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src="#" alt="name" />
          </Modal>
        )}
      </>
    );
  }
}
