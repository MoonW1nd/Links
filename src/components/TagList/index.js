import React from 'react';
import TagIcon from '../TagIcon';
import { PropTypes } from 'prop-types';
import './style.scss';

export default function TagList({ tags }) {
  const tagList = tags.map((tag, i) => <li className='TagList-Element' key={i}><TagIcon tagName={ tag } size='small'/></li>);
  return <ul className="TagList">
    {tagList}
  </ul>;
}

TagList.defaultProps = {
  tags: [],
};

TagList.propTypes = {
  tags: PropTypes.array,
};
