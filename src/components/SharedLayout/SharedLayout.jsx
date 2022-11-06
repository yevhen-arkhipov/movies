import { Outlet } from 'react-router-dom';

import { StyledLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <header>
        <div>
          <span role="img" aria-label="movie icon">
            📽️
          </span>{' '}
          Movies
        </div>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
