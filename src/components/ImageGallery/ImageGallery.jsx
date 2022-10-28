import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem';

import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      {images.map(({ id, ...restProps }) => (
        <ImageGalleryItem key={id} {...restProps} />
      ))}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default ImageGallery;
