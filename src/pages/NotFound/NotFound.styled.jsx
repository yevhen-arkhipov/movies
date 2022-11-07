import { Link } from 'react-router-dom';
import { HiOutlineArrowCircleLeft } from 'react-icons/hi';

import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1280px;
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.siteTitleColor};
  font-size: ${p => p.theme.fontSizes.xxxxl}px;
`;

export const Text = styled.p`
  margin-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.xl}px;
`;

export const ToMainLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 8px 10px 8px 10px;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l}px;
  text-decoration: none;
  border-radius: 8px;
  border: none;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hoverNavColor};
  }
`;

export const Icon = styled(HiOutlineArrowCircleLeft)`
  margin-right: ${p => p.theme.space[0]}px;
`;
