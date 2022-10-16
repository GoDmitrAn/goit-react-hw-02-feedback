import { ButtonList } from './FeedButtonList.styled';
import { FeedButton } from './FeedButtonList.styled';
export const FeedButtonList = () => {
  return (
    <ButtonList>
      <FeedButton>Good</FeedButton>
      <FeedButton>Neutral</FeedButton>
      <FeedButton>Bad</FeedButton>
    </ButtonList>
  );
};
