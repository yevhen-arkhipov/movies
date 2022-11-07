import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  margin: 0px auto;
  padding: 0px;
  list-style: none;
`;

export const Item = styled.li`
  margin-bottom: ${p => p.theme.space[3]}px;

  &:nth-last-child(-n + 2) {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h3`
  margin-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.xl}px;
  text-transform: uppercase;
`;

export const LinkTitle = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.text};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.hoverText};
  }
`;

export const Img = styled.img`
  width: 340px;
  height: 476px;
`;

export const MovieTitle = styled.p`
  max-width: 340px;
  margin-top: ${p => p.theme.space[1]}px;
  font-size: ${p => p.theme.fontSizes.xl}px;
`;
