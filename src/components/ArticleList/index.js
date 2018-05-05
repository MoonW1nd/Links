import React from 'react';
import Article from '../Article';
import { PropTypes } from 'prop-types';
import AccordeonDecorator from '../../decorators/Accordeon';
import { connect } from 'react-redux';
import './style.scss';


function ArticleList(props) {
  const { articles } = props;
  articles.sort((a, b) => b.id - a.id);
  const articleElements = articles
    .map(article => <li key = { article.id } className='ArticleList-Article_Wrapper'>
      <Article
        article = { article }
        isOpen = { article.id === props.openComponentId }
        toggleOpen = { props.toggleOpenComponent(article.id) }
      />
    </li>);
  return <ul className='ArticleList'>
    { articleElements }
  </ul>;
}

export default connect(state => ({
  articles: state.articles,
}))(AccordeonDecorator(ArticleList));

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  // from accordeon
  openComponentId: PropTypes.string,
  toggleOpenComponent: PropTypes.func,
};
