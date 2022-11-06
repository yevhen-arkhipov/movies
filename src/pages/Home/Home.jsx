import { useState, useEffect } from 'react';

import { TrendingMovie } from 'services/api';
import MovieList from 'components/MovieList';

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
    <div>
      <MovieList movies={trendMovie} title="Trending movies:" />
    </div>
  );
};

export default Home;
