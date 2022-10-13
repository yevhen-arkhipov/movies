import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatisticsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: bold;
`;
