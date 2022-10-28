import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal';

import { ImageGalleryCard, ImageGalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, tags = 'Image', largeImageURL }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <ImageGalleryCard onClick={toggleModal}>
        <ImageGalleryImage
          src={webformatURL}
          alt={tags}
          data-large={largeImageURL}
        />
      </ImageGalleryCard>
      {showModal && (
        <Modal image={largeImageURL} tags={tags} onClose={toggleModal} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
