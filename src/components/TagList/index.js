import React from 'react';
import TagIcon from '../TagIcon';
import { PropTypes } from 'prop-types';

export default function TagList({ tags }) {
  const tagList = tags.map((tag, i) => <li key={i}><TagIcon tagName={ tag }/></li>);
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
