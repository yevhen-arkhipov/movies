import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';

import { GlobalStyle } from './GlobalStyle';
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
          <LogoLink to="/">
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
    </>
  );
};

export default SharedLayout;
