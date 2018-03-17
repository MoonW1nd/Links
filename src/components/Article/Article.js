import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList/CommentList';
import ToggleOpenDecorator from '../../decorators/toggleOpen';

class Article extends Component {
  render() {
    const { article, isOpen, toggleOpen } = this.props;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick = {toggleOpen}>
          {isOpen ? 'Close' : 'Open'}
        </button>
        {this.getContent()}
      </div>
    );
  }

  getContent() {
    if (!this.props.isOpen) return null;
    const { article } = this.props;
    return <section>
      {article.text}
      <CommentList comments = { article.comments }/>
    </section>;
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
  }),
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
};

export default ToggleOpenDecorator(Article);
