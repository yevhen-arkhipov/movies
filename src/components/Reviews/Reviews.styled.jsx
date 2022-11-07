import styled from 'styled-components';

export const ReviewsList = styled.ul`
  margin-top: ${p => p.theme.space[2]}px;
`;

export const ReviewsItem = styled.li`
  &:not(: last-of-type) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const ReviewsText = styled.p`
  margin-bottom: ${p => p.theme.space[1]}px;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s}px;
`;

export const ReviewsError = styled.h3`
  margin: 20px auto;
  font-size: ${p => p.theme.fontSizes.s}px;
`;
