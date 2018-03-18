import React from 'react';
import Article from '../Article/Article';
import { PropTypes } from 'prop-types';

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openArticleId: null,
    };
  }

  render() {
    const { articles } = this.props;
    const articleElements = articles
      .map(article => <li key = { article.id }>
        <Article
          article = { article }
          isOpen = { article.id === this.state.openArticleId }
          toggleOpen = { this.toggleOpenArticle.bind(this, article.id) }
        />
      </li>);
    return <ul>
      { articleElements }
    </ul>;
  }

  toggleOpenArticle(openArticleId) {
    this.setState({
      openArticleId,
    });
  }
}

ArticleList.propTypes = {
  articles: PropTypes.array,
};
