import { Component } from 'react';
import { Statistics } from './feedback/statistic/Statistics';
import { FeedbackOptions } from './feedback/feedback-options/FeedbackOptions';
import { Section } from './feedback/section-title/SectionTitle';
import { Notification } from './feedback/notification/Notification';
import { Container } from './App.styled';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Number.parseInt((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
          {total === 0 ? (
            <Notification message={'There is no feedback'}></Notification>
          ) : (
            <Statistics
              state={this.state}
              total={total}
              percentage={percentage}
            ></Statistics>
          )}
        </Section>
        <GlobalStyle />
      </Container>
      
    );
  }
}
