import React from 'react';
import { PropTypes } from 'prop-types';

export default function TagImage(props) {
  return <img
    className = {props.tagName ? `TagImage TagImage_${props.tagName}` : 'TagName'}
    alt = {props.tagName ? `tag-${props.tagName}` : 'tag'}
  />;
}

TagImage.propTypes = {
  tagName: PropTypes.string,
};
