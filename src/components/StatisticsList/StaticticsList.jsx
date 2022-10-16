import { ItemsList, Item } from './StatisticsList.styled';

export const StatisticsList = ({ stateElements }) => {
  return (
    <ItemsList>
      <Item>Good: {stateElements.good}</Item>
      <Item>Neutral: {stateElements.neutral}</Item>
      <Item>Bad: {stateElements.bad}</Item>
    </ItemsList>
  );
};
