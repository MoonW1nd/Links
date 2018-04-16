import React from 'react';
import { PropTypes } from 'prop-types';
import iconLibrary from './assets/_iconLibraryModule';

export default function TagImage(props) {
  let img = iconLibrary[props.tagName];
  if (img === undefined) img = '';
  return <img
    className = {props.tagName ? `TagIcon TagIcon_${props.tagName}` : 'TagName'}
    src = {img}
    alt = {props.tagName ? `tag-${props.tagName}` : 'tag'}
  />;
}

TagImage.propTypes = {
  tagName: PropTypes.string,
};
