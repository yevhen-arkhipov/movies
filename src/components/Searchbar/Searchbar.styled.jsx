import styled from 'styled-components';
import { Form, Field } from 'formik';
import { AiOutlineSearch } from 'react-icons/ai';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  color: ${p => p.theme.colors.mainColor};
  background-color: ${p => p.theme.colors.mainColor};
  box-shadow: ${p => p.theme.shadows.box};
`;

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${p => p.theme.colors.secondColor};
  border: 1px solid #0000;
  border-radius: ${p => p.theme.space[3]}px;
  overflow: hidden;

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.secondButtonBorder};
    box-shadow: ${p => p.theme.shadows.buttonBox};
  }
`;

export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.l}px;
  background-color: ${p => p.theme.colors.secondColor};
  color: ${p => p.theme.colors.text};
  border: none;
  outline: none;
  padding-left: ${p => p.theme.space[0]}px;
  padding-right: ${p => p.theme.space[0]}px;

  &::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.m}px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${p => p.theme.space[4]}px;
  height: ${p => p.theme.space[4]}px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  width: ${p => p.theme.space[2]}px;
  height: ${p => p.theme.space[2]}px;
`;
