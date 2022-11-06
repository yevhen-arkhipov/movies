import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>404</h2>
      <p>Ooops, page not found</p>
      <Link to="/">To main page</Link>
    </div>
  );
};

export default NotFound;
