import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = () => {
  return (
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
  );
};

FeedbackOptions.propTypes = {};

export default FeedbackOptions;
