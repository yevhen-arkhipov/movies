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
