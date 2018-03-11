import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

export default function Header() {
  return <header className='Header'>
    <Logo/>
    <a className='Button Button_GitHubLink' href='http://github.com/MoonW1nd/Links'>GitHub</a>
  </header>;
}
