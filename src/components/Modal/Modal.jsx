import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Overlay, ModalBox, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleOverLay = e => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { imageUrl, alt } = this.props;

    return createPortal(
      <Overlay onClick={this.handleOverLay}>
        <ModalBox>
          <ModalImg src={imageUrl} alt={alt} />
        </ModalBox>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
