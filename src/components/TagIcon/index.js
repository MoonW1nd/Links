import React from 'react';
import { PropTypes } from 'prop-types';

export default function TagImage(props) {
  return <img
    className = {props.tagName ? `TagIcon TagIcon_${props.tagName}` : 'TagName'}
    src = 'assets/nodeJS.svg'
    alt = {props.tagName ? `tag-${props.tagName}` : 'tag'}
  />;
}

TagImage.propTypes = {
  tagName: PropTypes.string,
};
