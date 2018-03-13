import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    return <section>{article.text}</section>;
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
