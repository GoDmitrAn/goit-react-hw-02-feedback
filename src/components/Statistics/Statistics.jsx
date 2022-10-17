import { ItemsList, Item } from './Statistics.styled';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total === 0 ? (
    <Notification message="There is no feedback" />
  ) : (
    <ItemsList>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <Item>Positive feedback: {positivePercentage}% </Item>
    </ItemsList>
  );
};
