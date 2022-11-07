import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  List,
  Item,
  SectionTitle,
  LinkTitle,
  Img,
  MovieTitle,
} from './MovieList.styled';

const MovieList = ({ movies, title = null }) => {
  const location = useLocation();
  const baseImgUrl = 'https://image.tmdb.org/t/p/w342/';
  const defaultImg = 'https://i.ibb.co/nw331jk/1.jpg';

  return (
    <>
      {title && <SectionTitle>{title}</SectionTitle>}
      <List>
        {movies.map(({ id, original_title, poster_path }) => {
          return (
            <Item key={id}>
              <LinkTitle state={{ from: location }} to={`/movies/${id}`}>
                <Img
                  src={poster_path ? `${baseImgUrl}${poster_path}` : defaultImg}
                  alt={original_title}
                />
                <MovieTitle>{original_title}</MovieTitle>
              </LinkTitle>
            </Item>
          );
        })}
      </List>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
  title: PropTypes.string,
};

export default MovieList;
