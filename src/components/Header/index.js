import React from 'react';
import Logo from '../Logo';
import './style.scss';
import HeaderButton from '../Header-Button';

export default function Header() {
  return <header className='Header'>
    <Logo/>
    <div className='Header-ButtonsWrapper'>
      <HeaderButton text='About' link='#about'/>
      <HeaderButton text='GitHub' modificator="GitHubLink" link='http://github.com/MoonW1nd/Links'/>
    </div>
  </header>;
}
