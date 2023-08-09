import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

const DisplayAnswer = ({ next, total }) => (
  <div className="cal-answer">
    <div className="answer">
      {next ? (
        <div className="answer">{next.toString()}</div>
      ) : (
        <div className="answer">{total.toString()}</div>
      )}
    </div>
  </div>
);

DisplayAnswer.propTypes = {
  next: PropTypes.string,
  total: PropTypes.string,
};

DisplayAnswer.defaultProps = {
  next: null,
  total: null,
};

export default DisplayAnswer;
