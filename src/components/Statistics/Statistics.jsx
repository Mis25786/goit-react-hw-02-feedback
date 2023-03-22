import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, countTotalFeedback }) => {
  return (
    <div className="Section__item">
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>Positive feedback:{countTotalFeedback}</p>
    </div>
  );
};

Statistics.propTypes = {};

export default Statistics;
