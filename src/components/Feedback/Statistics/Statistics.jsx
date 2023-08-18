import PropTypes from 'prop-types';

import css from './Statistics.module.css';

const Statistics = props => {
  const { options, total, positivePercentage } = props;
  return (
    <ul>
      {options.map(option => (
        <li key={option} className={css.item}>
          {option}: {props[option]}
        </li>
      ))}
      <li className={css.item}>total : {total}</li>
      <li className={css.item}>positive feedback : {positivePercentage}%</li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  options: PropTypes.array.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
