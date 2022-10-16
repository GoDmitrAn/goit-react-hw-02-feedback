import React from 'react';
import { ButtonList } from './FeedButtonList.styled';
import { FeedButton } from './FeedButtonList.styled';
export const FeedButtonList = ({ handleIncrementFeedback }) => {
  return (
    <ButtonList>
      <FeedButton type="button" name="good" onClick={handleIncrementFeedback}>
        Good
      </FeedButton>
      <FeedButton
        type="button"
        name="neutral"
        onClick={handleIncrementFeedback}
      >
        Neutral
      </FeedButton>
      <FeedButton type="button" name="bad" onClick={handleIncrementFeedback}>
        Bad
      </FeedButton>
    </ButtonList>
  );
};
