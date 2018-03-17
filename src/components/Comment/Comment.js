import React from 'react';
import { PropTypes } from 'prop-types';

export default function Comment({ comment }) {
  return <div>
    <h4>{comment.user}</h4>
    <div><p>{comment.text}</p></div>
  </div>;
}

Comment.propTypes = {
  comment: PropTypes.object,
};
