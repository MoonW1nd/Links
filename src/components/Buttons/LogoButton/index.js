import React from 'react';
import { PropTypes } from 'prop-types';
import iconLibrary from './assets/_iconLibraryModule';
import './style.scss';

export default function LogoButton(props) {
  const svg = iconLibrary[props.logoName] ? iconLibrary[props.logoName] : '';
  const buttonSize = props.size ? props.size : 'medium';
  return <a
    className = {`Button LogoButton LogoButton_size_${buttonSize}`}
    href = {props.link}
    dangerouslySetInnerHTML = {{ __html: svg }}
  >
  </a>;
}

LogoButton.propTypes = {
  link: PropTypes.string,
  size: PropTypes.string,
  logoName: PropTypes.string.isRequired,
};
