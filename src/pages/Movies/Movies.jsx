import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { GetMovieBySearch } from 'services/api';

import SearchForm from 'components/SearchForm';
import MovieList from 'components/MovieList';

import { Section, Container } from './Movies.styled';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);

  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      const fetchSearchMovies = async () => {
        try {
          const data = await GetMovieBySearch(query);
          setSearchMovies(data);
        } catch (error) {
          console.error(error);
          setError(error);
        }
      };
      fetchSearchMovies();
    }
    return;
  }, [query]);

  const changeQuery = q => {
    setSearchParams({ query: q });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={changeQuery} />
        {searchMovies.length > 0 && !error && (
          <MovieList movies={searchMovies} />
        )}
      </Container>
    </Section>
  );
};

export default Movies;
