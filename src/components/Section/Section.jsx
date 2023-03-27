import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import Statistics from '../Statistics/Statistics';
// import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import css from './Section.module.css';

class Section extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelIncrementGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  handelIncrementNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  handelIncrementBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  // countTotalFeedback = () => {
  //   const values = Object.values(this.state);
  //   // const values = this.state;
  //   console.log(values);

  //   let total = 0;
  //   console.log(total);
  //   for (const value of values) {
  //     total += value;
  //   }
  // };

  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback();
    let percent = total ? Math.ceil((this.state.good / total) * 100) : 0;
    return percent;
  };

  render() {
    // console.log(this.state.good);
    // console.log(this.state.neutral);
    // console.log(this.state.bad);

    return (
      <div className={css.Section}>
        <h2 className="Section__name">Pleace leave feedback</h2>

        <div className="Section__btn">
          <button type="button" onClick={this.handelIncrementGood}>
            Good
          </button>
          <button type="button" onClick={this.handelIncrementNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handelIncrementBad}>
            Bad
          </button>
        </div>

        {/* <FeedbackOptions options={} onLeaveFeedback={}/> */}

        <h2 className="Section__statistics">Statistics</h2>

        <div className="Section__item">
          <p>Good:{this.state.good}</p>
          <p>Neutral:{this.state.neutral}</p>
          <p>Bad:{this.state.bad}</p>
          <p>Total:{this.countTotalFeedback}</p>
          <p>Positive feedback:{this.countPositiveFeedbackPercentage}</p>
        </div>

        {/* <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positivePercentage={this.state.positivePercentage}
        /> */}
      </div>
    );
  }
}

export default Section;
