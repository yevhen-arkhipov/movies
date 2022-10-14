import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s}px;
  font-weight: bold;
  margin-bottom: ${p => p.theme.space[1]}px;
`;

export const Input = styled.input`
  width: 230px;
  height: 20px;
  background-color: ${p => p.theme.colors.bodyColor};
  box-shadow: ${p => p.theme.shadows.outline};
  border-color: transparent;
  border-radius: 2px;
`;
