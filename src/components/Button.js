import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, onClick, className }) => (
  <button type="button" className={className} onClick={onClick}>
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
