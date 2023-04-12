import { Component } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

import css from './App.module.css';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedback = value => {
    this.setState(prevState => ({ [value]: prevState[value] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, val) => acc + val, 0);
  };

  countPositiveFeedbackPercentage = () => {
    let percentPositiveFeedback =
      ((this.state.good + this.state.neutral) * 100) /
      this.countTotalFeedback();

    return percentPositiveFeedback.toFixed() + ' %';
    // return Math.round(percentPositiveFeedback) + ' %';
    // return Math.floor(percentPositiveFeedback) + ' %';
  };

  render() {
    return (
      <div className={css.container}>
        <Section title="Pleace leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            'No feedback give'
          )}
        </Section>
      </div>
    );
  }
}
