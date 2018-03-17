import Comment from '../Comment/Comment';
import React from 'react';
import { PropTypes } from 'prop-types';

export default class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  render() {
    const { isOpen } = this.state;
    return <div>
      <button onClick = {this.toogleOpen}>
        {isOpen ? 'Close comments' : 'Open Comments'}
      </button>
      {this.getContent()}
    </div>;
  }

  getContent() {
    if (!this.state.isOpen) return null;
    const { comments } = this.props;
    const commentsElements = comments
      .map(comment => <li key = { comment.id }><Comment comment = { comment }/></li>);
    return <ul>
    {commentsElements}
  </ul>;
  }

  toogleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
}

CommentList.propTypes = {
  comments: PropTypes.array,
};
