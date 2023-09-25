import React from 'react';
import './Header.css';

const menuItems = ['Início', 'Animes', 'Discord'];

function Header() {
  return (
    <header>
      <h1>Anime TV</h1>
      <nav className='centered-nav'>
        {menuItems.map((item, index) => (
          <a key={item} href="/" style={{ marginRight: index === menuItems.length - 1 ? '0' : '20px' }}>{item}</a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
