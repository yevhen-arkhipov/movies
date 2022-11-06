import { useState, useEffect } from 'react';
import {
  Outlet,
  useParams,
  Link,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { HiOutlineArrowCircleLeft } from 'react-icons/hi';

import { GetMovieById } from 'services/api';

const items = [
  { text: 'Cast', href: 'cast' },
  { text: 'Reviews', href: 'reviews' },
];

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';
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

  const {
    original_title,
    overview,
    genres = [],
    vote_average,
    poster_path,
  } = movie;

  const filterGenre = genres.map(genre => genre.name).join(' ');
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

  return (
    <div>
      <button onClick={goBackPage}>
        <HiOutlineArrowCircleLeft size="16px" />
        Go back
      </button>
      <div>
        <img
          src={poster_path ? `${baseImgUrl}${poster_path}` : defaultImg}
          alt={original_title}
          width="300"
        />
        <div>
          <h3>{original_title}</h3>
          <p>
            <b>User Score:</b>
            {vote_average}%
          </p>
          <p>
            <b>Overview:</b>
          </p>
          {overview}
          <p>
            <b>Genres:</b>
          </p>
          {filterGenre}
        </div>
      </div>

      <div>
        <ul>
          {items.map(({ text, href }) => (
            <li key={text}>
              <Link state={{ from }} to={href}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
