import React from 'react';
import { PropTypes } from 'prop-types';
import iconLibrary from './assets/_iconLibraryModule';
import './style.scss';

export default function LogoButton(props) {
  const svg = iconLibrary[props.logoName] ? iconLibrary[props.logoName] : '';
  const buttonSize = props.size ? props.size : 'medium';
  const logoNameModificator = props.logoName ? `LogoButton_name_${props.logoName}` : '';
  return <a
    className = {`Button LogoButton LogoButton_size_${buttonSize} ${logoNameModificator}`}
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
