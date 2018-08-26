import React from 'react';
import { PropTypes as is } from 'prop-types';
import './style.scss';
import Link from '../Link';
import LanguageIcon from '../LanguageIcon';
import Separator from '../Separator/index';

export default function ArticleInfo({ link, language }) {
  return <p className='ArticleInfo'>
    <LanguageIcon language={ language }/>
    <Separator/>
    <Link link={ link } size='s' type='article'/>
  </p>;
}

ArticleInfo.propTypes = {
  link: is.string.isRequired,
  language: is.string.isRequired,
};
