import PropTypes from 'prop-types';
import { ItemsList, Item } from './StatisticsList.styled';

export const StatisticsList = ({
  stateElements,
  totalFeedback,
  feedbackPercentage,
}) => {
  return (
    <ItemsList>
      <Item>Good: {stateElements.good}</Item>
      <Item>Neutral: {stateElements.neutral}</Item>
      <Item>Bad: {stateElements.bad}</Item>
      <Item>Total: {totalFeedback}</Item>
      <Item>Positive feedback: {feedbackPercentage}% </Item>
    </ItemsList>
  );
};
StatisticsList.propTypes = {
  stateElements: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
};
