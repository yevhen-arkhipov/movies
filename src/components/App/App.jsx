import { Routes, Route } from 'react-router-dom';

// import { useState, useEffect } from 'react';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import jump from 'jump.js';

import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import MovieDetails from 'components/MovieDetails';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
// import Searchbar from 'components/Searchbar';
// import ImageGallery from 'components/ImageGallery';
// import Loader from 'components/Loader';
// import Button from 'components/Button';

// import { getMovies } from 'services/api';

const App = () => {
  // const [query, setQuery] = useState('');
  // const [page, setPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);
  // const [images, setImages] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   if (!query) {
  //     return;
  //   }

  //   const findImages = async () => {
  //     try {
  //       setIsLoading(true);

  //       const photos = await getImages(query, page);
  //       photos.hits.length === 0
  //         ? Notify.failure('Sorry, no images found. Try something else!')
  //         : setImages(images => [...images, ...photos.hits]);
  //     } catch (error) {
  //       setError(error.massage);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   findImages();
  // }, [page, query]);

  // const getQuery = inputQuery => {
  //   if (inputQuery !== query) {
  //     setQuery(inputQuery);
  //     setPage(1);
  //     setImages([]);
  //   }
  // };

  // const LoadMore = () => {
  //   jump(900);
  //   setPage(prevPage => prevPage + 1);
  // };

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}>
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      {/* <Container>
          {error && <h1>Oops, error, try again!</h1>}
          <Searchbar onSubmit={getQuery} />
          {images && <ImageGallery images={images} />}
          {isLoading && <Loader />}
          {images.length % 15 === 0 && images.length !== 0 ? (
            <Button onFetchMore={LoadMore} />
          ) : (
            ''
          )}
        </Container> */}
    </>
  );
};

export default App;
