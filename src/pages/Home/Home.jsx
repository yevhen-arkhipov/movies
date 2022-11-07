import { useState, useEffect } from 'react';

import { TrendingMovie } from 'services/api';
import MovieList from 'components/MovieList';

import { Section, Container } from './Home.styled.jsx';

const Home = () => {
  const [trendMovie, setTrendMovie] = useState([]);

  useEffect(() => {
    const fetchTrendMovie = async () => {
      try {
        const result = await TrendingMovie();
        setTrendMovie(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrendMovie();
  }, []);

  return (
    <Section>
      <Container>
        <MovieList movies={trendMovie} sectionTitle="Trending today" />
      </Container>
    </Section>
  );
};

export default Home;
