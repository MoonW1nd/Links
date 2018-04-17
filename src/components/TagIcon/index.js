import React from 'react';
import { PropTypes } from 'prop-types';
import iconLibrary from './assets/_iconLibraryModule';
import './style.scss';

export default function TagImage(props) {
  let img = iconLibrary[props.tagName];
  if (img === undefined) img = '';
  const sizeClass = props.size ? `TagIcon_size_${props.size}` : 'TagIcon_size_medium';
  return <img
    className = {props.tagName ? `TagIcon ${sizeClass}` : 'TagName'}
    src = {img}
    alt = {props.tagName ? `tag-${props.tagName}` : 'tag'}
  />;
}

TagImage.propTypes = {
  tagName: PropTypes.string,
  size: PropTypes.string,
};
