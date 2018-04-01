import React from 'react';
import Header from './components/Header/Header.jsx';
import ArticleList from './components/ArticleList/ArticleList.jsx';
import { articles } from './data';
import SearchInput from './components/SearchInput/SearchInput.jsx';
import './App.scss';

export default function App() {
  return <div className='App'>
    <Header/>
    <SearchInput/>
    <ArticleList articles={ articles }/>
  </div>;
}
