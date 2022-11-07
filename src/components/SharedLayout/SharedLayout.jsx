import { Outlet } from 'react-router-dom';

import {
  Header,
  Container,
  LogoLink,
  Logo,
  SiteName,
  NavList,
  StyledLink,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <LogoLink href="/goit-react-hw-05-movies/">
            <Logo role="img" aria-label="movie icon">
              📽️
            </Logo>{' '}
            <SiteName>Movies</SiteName>
          </LogoLink>
          <NavList>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </NavList>
        </Container>
      </Header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
