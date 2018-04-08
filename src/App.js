import React from 'react';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import { articles } from './data';
import SearchInput from './components/SearchInput';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';

export default function App() {
  return <Provider store = { store }>
    <div className='App'>
      <Header/>
      <SearchInput/>
      <ArticleList articles={ articles }/>
    </div>
  </Provider>;
}
