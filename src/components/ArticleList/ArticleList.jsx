import React from 'react';
import Article from '../Article/Article.jsx';
import { PropTypes } from 'prop-types';
import AccordeonDecorator from '../../decorators/Accordeon.jsx';

function ArticleList(props) {
  const { articles } = props;
  const articleElements = articles
    .map(article => <li key = { article.id }>
      <Article
        article = { article }
        isOpen = { article.id === props.openComponentId }
        toggleOpen = { props.toggleOpenComponent(article.id) }
      />
    </li>);
  return <ul>
    { articleElements }
  </ul>;
}

export default AccordeonDecorator(ArticleList);

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  // from accordeon
  openComponentId: PropTypes.string,
  toggleOpenComponent: PropTypes.func,
};
