import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import './style.scss';
import TagList from '../TagList/index';
import PublishDate from '../PublishDate/index';
import YouTubeFrame from '../YouTubeFrame';
import ArticleInfo from '../ArticleInfo';
import { markdown } from 'markdown';
import DOMPurify from 'dompurify';


export default class Article extends React.PureComponent {
  render() {
    const { article, isOpen, toggleOpen } = this.props;
    return (
      <section className='Article'>
        <h3 className='Article-Title'>{ article.title }</h3>
        <PublishDate date = { article.date }/>
        <ArticleInfo link = { article.link } language={ article.language }/>
        {this.getContent()}
        <button
          onClick = { toggleOpen }
          className = { `Article-Button ${isOpen ? 'Article-Button_open' : ''}`}
        >
          { isOpen ? '' : 'Подробнее...' }
        </button>
        <TagList tags = {article.tags}/>
      </section>
    );
  }

  getContent = () => {
    const { isOpen } = this.props;
    const content = markdown.toHTML(this.props.article.text);
    return <CSSTransition timeout={ { enter: 300, exit: 0 } } classNames='article' in={isOpen} unmountOnExit>
      {
        <div className={'Article-Content'}>
          <YouTubeFrame {...this.props.article}/>
          <div className={'Article-Content_Text'} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}/>
        </div>
      }
    </CSSTransition>;
  }
}


Article.propTypes = {
  id: PropTypes.string,
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    comments: PropTypes.array,
    tags: PropTypes.array,
  }),
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
};
