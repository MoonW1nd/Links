import React from 'react';
import Logo from '../Logo/Logo.jsx';
import './Header.scss';
import HeaderButton from '../Header-Button/Header-Button.jsx';

export default function Header() {
  return <header className='Header'>
    <Logo/>
    <div className='Header-ButtonsWrapper'>
      <HeaderButton text='About' link='#about'/>
      <HeaderButton text='GitHub' modificator="GitHubLink" link='http://github.com/MoonW1nd/Links'/>
    </div>
  </header>;
}
