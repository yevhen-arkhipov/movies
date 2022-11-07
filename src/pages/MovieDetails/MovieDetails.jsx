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
  const [movie, setMovie] = useState({});
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
      }
    };
    fetchMovieById();
  }, [movieId]);

  const goBackPage = () => navigate(from);

  const { title, overview, genres = [], vote_average, poster_path } = movie;

  const filterGenre = genres.map(genre => genre.name).join(' ');
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg = 'https://i.ibb.co/nw331jk/1.jpg';

  return (
    <Section>
      <Container>
        <Button onClick={goBackPage}>
          <Icon size="18px" />
          Go back
        </Button>
        <MovieCard>
          <MovieImg
            src={poster_path ? `${baseImgUrl}${poster_path}` : defaultImg}
            alt={title}
            width="300"
          />
          <MovieDescr>
            <MovieTitle>{title}</MovieTitle>
            <MovieText>
              <b>User Score: </b>
              {vote_average}%
            </MovieText>
            <MovieText>
              <b>Overview: </b>
              {overview}
            </MovieText>
            <MovieText>
              <b>Genres: </b>
              {filterGenre}
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
        <Outlet />
      </Container>
    </Section>
  );
};

export default MovieDetails;
