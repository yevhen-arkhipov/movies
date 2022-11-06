import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { GetCast } from 'services/api';

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
  const defaultImg =
    'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
  const elements = casts.map(({ id, character, name, profile_path }) => (
    <li key={id}>
      <img
        src={profile_path ? `${baseImgUrl}${profile_path}` : defaultImg}
        alt={name}
        height="277px"
        width="185px"
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  ));

  return casts.length > 0 ? (
    <ul> {elements} </ul>
  ) : (
    <p>We don't have any actors for this movie</p>
  );
};

export default Cast;
