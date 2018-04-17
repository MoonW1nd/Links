import React from 'react';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';

export default function App() {
  return <Provider store = { store }>
    <div className='App'>
      <Header/>
      <ArticleList/>
    </div>
  </Provider>;
}
