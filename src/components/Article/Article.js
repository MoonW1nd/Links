import React from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList/CommentList';


export default class Article extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.isOpen !== this.props.isOpen;
  }

  render() {
    const { article, isOpen, toggleOpen } = this.props;
    console.log('update article');
    return (
      <div>
        <h3>{ article.title }</h3>
        <button onClick = { toggleOpen }>
          { isOpen ? 'Close' : 'Open' }
        </button>
        { this.getContent() }
      </div>
    );
  }

  getContent = () => {
    const { isOpen } = this.props;
    const { comments } = this.props.article;
    const content = this.props.article.text;
    if (!isOpen) return null;
    return <section>
      {content}
      <CommentList comments = { comments }/>
    </section>;
  }
}


Article.propTypes = {
  id: PropTypes.string.isRequired,
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    comments: PropTypes.array,
  }),
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
};
