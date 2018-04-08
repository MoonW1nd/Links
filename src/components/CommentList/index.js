import Comment from '../Comment';
import React from 'react';
import { PropTypes } from 'prop-types';
import ToggleOpenDecorator from '../../decorators/ToggleOpen';

function CommentList({ isOpen, toggleOpen, comments }) {
  return <div>
    <button onClick = {toggleOpen}>
      {isOpen ? 'Close comments' : 'Open Comments'}
    </button>
    { getContent(comments, isOpen) }
  </div>;
}


function getContent(comments, isOpen) {
  if (!isOpen) return null;
  if (!comments.length) return <p>No comments yet</p>;
  const commentsElements = comments
    .map(comment => <li key = { comment.id }><Comment comment = { comment }/></li>);
  return <ul>
    {commentsElements}
  </ul>;
}

CommentList.propTypes = {
  comments: PropTypes.array,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func.isRequired,
};

CommentList.defaultProps = {
  comments: [],
};

export default ToggleOpenDecorator(CommentList);
