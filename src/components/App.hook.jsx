import { useState } from 'react';
import { Statistics } from './feedback/statistic/Statistics';
import { FeedbackOptions } from './feedback/feedback-options/FeedbackOptions';
import { Section } from './feedback/section-title/SectionTitle';
import { Notification } from './feedback/notification/Notification';
import { Container } from './App.styled';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = type => {
    setState(prevState => ({
      ...prevState,
        [type]: prevState[type] + 1,
      }))
    };

 const countTotalFeedback = () => {
   const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

 const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    return Number.parseInt((good / countTotalFeedback()) * 100);
  };
  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();
  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={handleClick}
        ></FeedbackOptions>
        {total === 0 ? (
          <Notification message={'There is no feedback'}></Notification>
        ) : (
          <Statistics
            state={state}
            total={total}
            percentage={percentage}
          ></Statistics>
        )}
      </Section>
      <GlobalStyle />
    </Container>
  );
        }