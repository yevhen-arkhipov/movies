import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  return (
    <>
      <h3>MovieDetails</h3>
      <div>{movieId}</div>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
