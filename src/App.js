import React from 'react';
import Header from './components/Header/Header';
import ArticleList from './components/ArticleList/ArticleList';
import { articles } from './data';

export default function App() {
  return <div>
    <Header/>
    <ArticleList articles={ articles }/>
  </div>;
}
