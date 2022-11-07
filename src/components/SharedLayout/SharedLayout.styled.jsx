import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: ${p => p.theme.space[2]}px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 1280px;
  font-size: ${p => p.theme.fontSizes.xxl}px;
`;

export const LogoLink = styled.a`
  display: flex;
  margin-left: 90px;
  text-decoration: none;
`;

export const Logo = styled.span`
  font-size: ${p => p.theme.fontSizes.xxxl}px;
`;

export const SiteName = styled.p`
  margin-left: ${p => p.theme.space[1]}px;
  color: ${p => p.theme.colors.siteTitleColor};
  font-size: ${p => p.theme.fontSizes.xxxl}px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const NavList = styled.nav`
  margin-left: ${p => p.theme.space[6]}px;
  font-size: ${p => p.theme.fontSizes.xl}px;
`;

export const StyledLink = styled(NavLink)`
  padding: 2px 10px 6px 10px;
  background-color: ${p => p.theme.colors.backgroundColor};
  color: ${p => p.theme.colors.text};
  text-decoration: none;
  border-radius: 8px;
  border: none;

  &:not(: last-of-type) {
    margin-right: ${p => p.theme.space[1]}px;
  }

  &.active {
    background-color: ${p => p.theme.colors.text};
    color: ${p => p.theme.colors.secondText};

    &:hover,
    &:focus {
      background-color: ${p => p.theme.colors.text};
    }
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hoverNavColor};
  }
`;
