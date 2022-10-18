import PropTypes from 'prop-types';
import { ButtonList, FeedButton } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      <FeedButton type="button" name={options.good} onClick={onLeaveFeedback}>
        {options.good}
      </FeedButton>
      <FeedButton
        type="button"
        name={options.neutral}
        onClick={onLeaveFeedback}
      >
        {options.neutral}
      </FeedButton>
      <FeedButton type="button" name={options.bad} onClick={onLeaveFeedback}>
        {options.bad}
      </FeedButton>
    </ButtonList>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.object,
};
