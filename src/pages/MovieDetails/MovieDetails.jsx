import { useState, useEffect } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';

import { GetMovieById } from 'services/api';

import {
  Section,
  Container,
  Button,
  Icon,
  MovieCard,
  MovieImg,
  MovieDescr,
  MovieTitle,
  MovieText,
  MoreDetailes,
  MoreDetailesList,
  MoreDetailesButton,
  MoreDetailesItem,
} from './MovieDetails.styled';

const items = [
  { text: 'Cast', href: 'cast' },
  { text: 'Reviews', href: 'reviews' },
];

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from ?? '/';
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const result = await GetMovieById(movieId);
        setMovie(result);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };
    fetchMovieById();
  }, [movieId]);

  const goBackPage = () => navigate(from);

  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg =
    'https://s1.hostingkartinok.com/uploads/images/2022/12/155344596d91ea1ece40f1e255d28809.jpg';

  return (
    <Section>
      <Container>
        <Button onClick={goBackPage}>
          <Icon size="18px" />
          Go back
        </Button>
        {movie && !error && (
          <MovieCard>
            <MovieImg
              src={
                movie.poster_path
                  ? `${baseImgUrl}${movie.poster_path}`
                  : defaultImg
              }
              alt={movie.title}
              width="300"
            />
            <MovieDescr>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieText>
                <b>User Score: </b>
                {movie.vote_average}%
              </MovieText>
              <MovieText>
                <b>Overview: </b>
                {movie.overview}
              </MovieText>
              <MovieText>
                <b>Genres: </b>
                {movie.genres.map(genre => genre.name).join(' ')}
              </MovieText>
              <MoreDetailes>
                <MovieText>
                  <b>Additional Information</b>
                </MovieText>
                <MoreDetailesList>
                  {items.map(({ text, href }) => (
                    <MoreDetailesItem key={text}>
                      <MoreDetailesButton state={{ from }} to={href}>
                        {text}
                      </MoreDetailesButton>
                    </MoreDetailesItem>
                  ))}
                </MoreDetailesList>
              </MoreDetailes>
            </MovieDescr>
          </MovieCard>
        )}
        <Outlet />
      </Container>
    </Section>
  );
};

export default MovieDetails;
