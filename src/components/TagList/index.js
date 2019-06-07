import React from 'react';
import TagIcon from '../TagIcon';
import { PropTypes } from 'prop-types';
import './style.scss';

export default function TagList({ tags }) {
  const tag = tags[0];
  return <div className={`TagList TagList_${tag}`}>
    <li className={'TagList-Element'}><TagIcon tagName={ tag } size='small'/></li>
  </div>;
}

TagList.defaultProps = {
  tags: [],
};

TagList.propTypes = {
  tags: PropTypes.array,
};
