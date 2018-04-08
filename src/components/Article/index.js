import React from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList';
import { CSSTransition } from 'react-transition-group';
import './style.scss';


export default class Article extends React.PureComponent {
  render() {
    const { article, isOpen, toggleOpen } = this.props;
    return (
      <div className='Article'>
        <h3 className='Article-Title'>{ article.title }</h3>
        <button onClick = { toggleOpen }>
          { isOpen ? 'Close' : 'Open' }
        </button>
        {this.getContent()}
      </div>
    );
  }

  getContent = () => {
    const { isOpen } = this.props;
    const { comments } = this.props.article;
    const content = this.props.article.text;
    return <CSSTransition timeout={ { enter: 300, exit: 0 } } classNames='article' in={isOpen} unmountOnExit>
      {
       <section className={'article'}>
            {content}
            <CommentList comments = { comments }/>
          </section>
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
  }),
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
};
