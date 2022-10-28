import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import jump from 'jump.js';

import Box from 'components/Box';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import Button from 'components/Button';

import { getImages } from 'services/api';

import { Container } from './App.styled';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  Notify.init({
    width: '320px',
    position: 'center-top',
    distance: '70px',
    clickToClose: true,
    cssAnimationStyle: 'from-top',
    cssAnimationDuration: 800,
  });

  useEffect(() => {
    if (!query) {
      return;
    }

    const findImages = async () => {
      try {
        setIsLoading(true);

        const photos = await getImages(query, page);
        photos.hits.length === 0
          ? Notify.failure('Sorry, no images found. Try something else!')
          : setImages(images => [...images, ...photos.hits]);
      } catch (error) {
        setError(error.massage);
      } finally {
        setIsLoading(false);
      }
    };

    findImages();
  }, [page, query]);

  const getQuery = inputQuery => {
    if (inputQuery !== query) {
      setQuery(inputQuery);
      setPage(1);
      setImages([]);
    }
  };

  const LoadMore = () => {
    jump(900);
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Box as="main">
        <Container>
          {error && <h1>Oops, error, try again!</h1>}
          <Searchbar onSubmit={getQuery} />
          {images && <ImageGallery images={images} />}
          {isLoading && <Loader />}
          {images.length % 15 === 0 && images.length !== 0 ? (
            <Button onFetchMore={LoadMore} />
          ) : (
            ''
          )}
        </Container>
      </Box>
    </>
  );
};
