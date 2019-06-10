import React from 'react';
import Logo from '../Logo';
import './style.scss';
// import SearchInput from '../SearchInput';
import LogoButton from '../Buttons/LogoButton';

export default function Header() {
  return <header className='Header'>
    {/* <SearchInput/> */}
    <Logo className="Header-Logo"/>
    <div className='Header-ButtonsWrapper'>
      <LogoButton logoName='AlexanderIvankovLogo' link='http://alexanderivankov.ru/'/>
      <LogoButton logoName='gitHub' link='http://github.com/MoonW1nd/Links'/>
    </div>
  </header>;
}
