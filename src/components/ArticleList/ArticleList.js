import React from 'react';
import Article from '../Article/Article';
import { PropTypes } from 'prop-types';

export default function ArticleList({ articles }) {
  const articleElements = articles
    .map(article => <li key = { article.id }><Article article = { article }/></li>);
  return <ul>
    { articleElements }
  </ul>;
}

ArticleList.propTypes = {
  articles: PropTypes.array,
};
