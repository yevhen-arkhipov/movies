import styled from 'styled-components';

export const LoadMoreButton = styled.button`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  font-size: ${p => p.theme.fontSizes.s}px;
  height: 44px;
  line-height: 42px;
  padding: 0 16px;
  border: 1px solid #0000;
  border-radius: ${p => p.theme.space[0]}px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  background-color: ${p => p.theme.colors.mainColor};
  color: ${p => p.theme.colors.buttonColor};
  border-color: ${p => p.theme.colors.buttonBorder};
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.secondButtonColor};
    border-color: ${p => p.theme.colors.secondButtonBorder};
    box-shadow: ${p => p.theme.shadows.buttonBox};
  }
`;
