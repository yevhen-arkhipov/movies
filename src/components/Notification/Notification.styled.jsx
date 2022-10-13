import styled from 'styled-components';

export const Text = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: bold;
`;
