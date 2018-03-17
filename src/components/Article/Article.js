import React from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList/CommentList';
import ToggleOpenDecorator from '../../decorators/toggleOpen';

function Article({ article, isOpen, toggleOpen }) {
  return (
    <div>
      <h3>{article.title}</h3>
      <button onClick = { toggleOpen }>
        { isOpen ? 'Close' : 'Open' }
      </button>
      { getContent(article, isOpen) }
    </div>
  );
}

function getContent(article, isOpen) {
  if (!isOpen) return null;
  return <section>
    {article.text}
    <CommentList comments = { article.comments }/>
  </section>;
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
