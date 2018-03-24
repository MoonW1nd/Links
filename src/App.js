import React from 'react';
import Header from './components/Header/Header';
import ArticleList from './components/ArticleList/ArticleList';
import { articles } from './data';
import SearchInput from './components/SearchInput/SearchInput';

export default function App() {
  return <div>
    <Header/>
    <SearchInput/>
    <ArticleList articles={ articles }/>
  </div>;
}
