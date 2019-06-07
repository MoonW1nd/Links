import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

export default function Logo({ className }) {
  return <div className={`Logo ${className}`}>
    <span>links</span>
  </div>;
}

Logo.propTypes = {
  className: PropTypes.string,
};
