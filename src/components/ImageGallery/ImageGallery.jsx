import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem';

import { ImageGalleryList } from './ImageGallery.styled';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ImageGalleryList>
      {images.map((item, index) => {
        return (
          <ImageGalleryItem
            onClick={onClick}
            key={item.id}
            imageUrl={item.webformatURL}
            alt={item.tags}
            id={item.id}
          />
        );
      })}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
