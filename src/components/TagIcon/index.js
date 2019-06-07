import React from 'react';
import { PropTypes } from 'prop-types';
import iconLibrary from './assets/_iconLibraryModule';
import './style.scss';

export default function TagImage(props) {
  let img = iconLibrary[props.tagName];
  if (img === undefined) img = '';
  return <img
    className = {`TagIcon TagIcon_${props.tagName}`}
    src = {img}
    alt = {props.tagName ? `tag-${props.tagName}` : 'tag'}
    title = { getTitle(props.tagName) }
  />;
}

function getTitle(tagName) {
  let title = null;
  switch (tagName) {
    case 'nodeJS':
      title = 'Node.js';
      break;

    case 'UIUX':
      title = 'UX/UI';
      break;

    case 'css':
      title = 'CSS';
      break;

    case 'html':
      title = 'HTML';
      break;

    default:
      title = tagName[0].toUpperCase() + tagName.slice(1);
      break;
  }
  return title;
}

TagImage.propTypes = {
  tagName: PropTypes.string,
  size: PropTypes.string,
};
