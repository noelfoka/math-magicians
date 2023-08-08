import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

const DisplayAnswer = ({ answer }) => (
  <div className="cal-answer">
    <div className="answer">{answer}</div>
  </div>
);

DisplayAnswer.propTypes = {
  answer: PropTypes.string.isRequired,
};

export default DisplayAnswer;
