import { Component } from 'react';
import { Title, FeedbackBox } from './Feedback.styled';
import { FeedButtonList } from 'components/FeedButtonList/FeedButtonList';
import { Statistics } from 'components/Statistics/Statistics';

export class FeedbackComponent extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <FeedbackBox>
        <Title>Please leave feedback</Title>
        <FeedButtonList></FeedButtonList>
        <Statistics></Statistics>
      </FeedbackBox>
    );
  }
}
