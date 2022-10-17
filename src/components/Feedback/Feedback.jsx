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
  handleIncrementFeedback = evt => {
    const { target } = evt;

    this.setState(prevState => {
      const nameElement = target.name;
      return { [nameElement]: prevState[nameElement] + 1 };
    });
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    if (this.countTotalFeedback() === 0) {
      return 0;
    } else return Math.round((good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
      <FeedbackBox>
        <Title>Please leave feedback</Title>
        <FeedButtonList
          handleIncrementFeedback={this.handleIncrementFeedback}
        />
        <Statistics
          state={this.state}
          total={this.countTotalFeedback()}
          countPercentage={this.countPositiveFeedbackPercentage()}
        />
      </FeedbackBox>
    );
  }
}
