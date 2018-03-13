import React from 'react';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import { articles } from './data';

export default function App() {
  return <div>
    <Header/>
    <Article article={articles[0]}/>
  </div>;
}
