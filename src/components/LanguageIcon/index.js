import React from 'react';
import { PropTypes as is } from 'prop-types';
import './style.scss';

export default function LanguageIcon({ language }) {
  return <span className='LanguageIcon'>
    {language.toLowerCase()}
  </span>;
}

LanguageIcon.propTypes = {
  language: is.string.isRequired,
};
