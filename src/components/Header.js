import React from 'react';
import logoImg from '../assets/images/Troll Face.png'

function Header() {
  return (
    <header className="header">
     <img className='header-logo' src={logoImg} alt="logo"/>
     <h2 className='header-title'>Meme Generator</h2>
     <p className='header-text'>React Course - Project 3</p>
    </header>
  );
}

export default Header;
