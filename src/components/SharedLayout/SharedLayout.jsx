import { Outlet } from 'react-router-dom';

import Box from 'components/Box';

import { StyledLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Box as="div" display="flex" flexDirection="column">
      <header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <Outlet />
    </Box>
  );
};

export default SharedLayout;
