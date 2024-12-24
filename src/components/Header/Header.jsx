import React from 'react';
import './Header.scss'; // Подключаем стили

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className='.nav'>
          <img className='Logo' src="" alt="" />
          <a href="Home">Home</a>
          <a href="About">About</a>
          <a href="Contacts">Contacts</a>
          <button className='Buy'>Заказать</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;