import { articles as defaultArticles } from '../data';

export default (articlesState = defaultArticles, action) => {
  const { type } = action;

  switch (type) {
    case 'DELETE_ARTICLE': return articlesState;
    default: return articlesState;
  }
};
