import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

export default function HeaderButton(props) {
  return <a
    className={props.modificator ? `HeaderButton HeaderButton_${props.modificator}` : 'HeaderButton'}
    href={props.link}
  >
    { props.text }
  </a>;
}

HeaderButton.propTypes = {
  link: PropTypes.string,
  modificator: PropTypes.string,
  text: PropTypes.string.isRequired,
};
