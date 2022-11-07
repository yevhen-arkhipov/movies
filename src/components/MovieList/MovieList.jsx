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

const MovieList = ({ movies, sectionTitle = null }) => {
  const location = useLocation();
  const baseImgUrl = 'https://image.tmdb.org/t/p/w342/';
  const defaultImg = 'https://i.ibb.co/nw331jk/1.jpg';

  return (
    <>
      {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
      <List>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <Item key={id}>
              <LinkTitle state={{ from: location }} to={`/movies/${id}`}>
                <Img
                  src={poster_path ? `${baseImgUrl}${poster_path}` : defaultImg}
                  alt={title}
                />
                <MovieTitle>{title}</MovieTitle>
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
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
  sectionTitle: PropTypes.string,
};

export default MovieList;
