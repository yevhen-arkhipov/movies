import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  padding-bottom: ${p => p.theme.space[2]}px;
`;

export const Input = styled.input`
  width: 530px;
  height: ${p => p.theme.space[4]}px;
  padding: 0 20px;
  background-color: ${p => p.theme.colors.inputColor};
  color: ${p => p.theme.colors.inputTextColor};
  font-size: ${p => p.theme.fontSizes.s}px;
  border-radius: 40px 0 0 40px;
  border: ${p => p.theme.border.mainBorder};
  box-shadow: inset 0 1px 2px hsla(0, 0%, 0%, 0);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.inputColor};
    border: 1px solid ${p => p.theme.colors.hoverNavColor};
  }
`;

export const Button = styled.button`
  height: ${p => p.theme.space[4]}px;
  padding: 0 ${p => p.theme.space[2]}px;
  background-color: hsla(0, 0%, 100%, 0.08);
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s}px;
  border-radius: 0 40px 40px 0;
  border: ${p => p.theme.border.mainBorder};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hoverNavColor};
    border: 1px solid ${p => p.theme.colors.hoverNavColor};
  }
`;
