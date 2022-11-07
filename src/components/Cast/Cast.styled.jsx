import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 33px;
  margin: 20px auto;
  padding: 0px;
  list-style: none;
`;

export const CastCard = styled.li`
  // *
`;

export const CastImg = styled.img`
  margin-bottom: ${p => p.theme.space[1]}px;
  width: 185px;
  height: 278px;
`;

export const CastTitle = styled.p`
  margin-bottom: ${p => p.theme.space[0]}px;
  width: ${p => p.theme.space[7]}px;
  font-size: ${p => p.theme.fontSizes.s}px;
  text-transform: uppercase;
`;

export const CastText = styled.p`
  font-size: ${p => p.theme.fontSizes.s}px;
  width: 90px;
`;

export const CastError = styled.h3`
  margin: 20px auto;
  font-size: ${p => p.theme.fontSizes.s}px;
`;
