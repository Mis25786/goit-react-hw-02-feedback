import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  //   static defaultProps = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   };

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
      neutral: prevState.neutral + 1,
      bad: prevState.bad + 1,
    }));
  };

  //   handelIncrementGood = () => {
  //     this.setState(prevState => ({ good: prevState.good + 1 }));
  //   };
  //   handelIncrementNeutral = () => {
  //     this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  //   };
  //   handelIncrementBad = () => {
  //     this.setState(prevState => ({ bad: prevState.bad + 1 }));
  //   };

  countTotalFeedback = () => {
    console.log(this.state.props);
  };

  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <div className={css.Feedback}>
        <h2 className="Feedback__name">Pleace leave feedback</h2>

        <div className="Feedback__btn">
          <button type="button" onClick={this.handelIncrement}>
            Good
          </button>
          <button type="button" onClick={this.handelIncrement}>
            Neutral
          </button>
          <button type="button" onClick={this.handelIncrement}>
            Bad
          </button>
        </div>

        <h2 className="Feedback__statistics">Statistics</h2>

        <div className="Feedback__item">
          <p>Good:{this.state.good}</p>
          <p>Neutral:{this.state.neutral}</p>
          <p>Bad:{this.state.bad}</p>
          <p>Total:</p>
          <p>Positive feedback:</p>
        </div>
      </div>
    );
  }
}

export default Feedback;
