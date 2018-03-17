import Comment from '../Comment/Comment';
import React from 'react';
import { PropTypes } from 'prop-types';
import ToggleOpenDecorator from '../../decorators/toggleOpen';

class CommentList extends React.Component {
  render() {
    const { isOpen, toggleOpen } = this.props;
    return <div>
      <button onClick = {toggleOpen}>
        {isOpen ? 'Close comments' : 'Open Comments'}
      </button>
      {this.getContent()}
    </div>;
  }

  getContent() {
    if (!this.props.isOpen) return null;
    const { comments } = this.props;
    if (!comments.length) return <p>No comments yet</p>;
    const commentsElements = comments
      .map(comment => <li key = { comment.id }><Comment comment = { comment }/></li>);
    return <ul>
    {commentsElements}
  </ul>;
  }
}

CommentList.propTypes = {
  comments: PropTypes.array,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
};

CommentList.defaultProps = {
  comments: [],
};

export default ToggleOpenDecorator(CommentList);
