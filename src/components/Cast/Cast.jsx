import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { GetCast } from 'services/api';

import {
  CastList,
  CastCard,
  CastImg,
  CastTitle,
  CastText,
  CastError,
} from './Cast.styled';

const Cast = () => {
  const [casts, setCasts] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCastMovies = async () => {
      try {
        const data = await GetCast(movieId);
        setCasts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCastMovies();
  }, [movieId]);

  const baseImgUrl = 'https://image.tmdb.org/t/p/w185';
  const defaultImg = 'https://i.ibb.co/mHBWWH3/1.jpg';
  const elements = casts.map(({ id, character, name, profile_path }) => (
    <CastCard key={id}>
      <CastImg
        src={profile_path ? `${baseImgUrl}${profile_path}` : defaultImg}
        alt={name}
      />
      <CastTitle>{name}</CastTitle>
      <CastText>Character: {character}</CastText>
    </CastCard>
  ));

  return casts.length > 0 ? (
    <CastList> {elements} </CastList>
  ) : (
    <CastError>We don't have any actors for this movie</CastError>
  );
};

export default Cast;
