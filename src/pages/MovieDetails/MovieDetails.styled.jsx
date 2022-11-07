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
  flex-direction: row;
  flex-wrap: wrap;
  width: 1280px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.theme.space[2]}px;
  padding: 8px 10px 8px 10px;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l}px;
  text-decoration: none;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hoverNavColor};
  }
`;

export const Icon = styled(HiOutlineArrowCircleLeft)`
  margin-right: ${p => p.theme.space[0]}px;
`;

export const MovieCard = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const MovieImg = styled.img`
  width: 400px;
  heigth: 6000px;
`;

export const MovieDescr = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 80px 0 60px;
`;

export const MovieTitle = styled.h3`
  margin-bottom: ${p => p.theme.space[6]}px;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.xxxl}px;
  text-transform: uppercase;
`;

export const MovieText = styled.p`
  margin-bottom: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s}px;
`;

export const MoreDetailes = styled.div`
  margin-top: ${p => p.theme.space[6]}px;
`;

export const MoreDetailesList = styled.ul`
  display: flex;
`;

export const MoreDetailesItem = styled.li`
  &:not(: last-of-type) {
    margin-right: ${p => p.theme.space[1]}px;
  }
`;

export const MoreDetailesButton = styled(Link)`
  display: flex;
  align-items: center;
  padding: 8px 18px;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l}px;
  text-decoration: none;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hoverNavColor};
  }
`;
