import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList/CommentList';

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { article } = this.props;
    const { isOpen } = this.state;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick = {this.toggleOpen}>
          {isOpen ? 'Close' : 'Open'}
        </button>
        {this.getContent()}
      </div>
    );
  }

  getContent() {
    if (!this.state.isOpen) return null;
    const { article } = this.props;
    return <section>
      {article.text}
      console.log(article.comments)
      <CommentList comments = { article.comments }/>
    </section>;
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
}

Article.propTypes = {
  article: PropTypes.object,
};
