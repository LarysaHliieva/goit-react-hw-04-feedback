import { useState } from 'react';

import Statistics from 'components/Feedback/Statistics/Statistics';
import FeedbackOptions from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

import css from './Feedback.module.css';

const feedbackOptions = ['good', 'neutral', 'bad'];

const Feedback = () => {
  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onAddOption = value => {
    setOptions(prevOptions => ({
      ...prevOptions,
      [value]: prevOptions[value] + 1,
    }));
  };

  const { good, neutral, bad } = options;

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return total ? Math.round((good * 100) / total) : 0;
  };

  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <div className={css.feedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={onAddOption}
        />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            options={feedbackOptions}
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification text="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default Feedback;
