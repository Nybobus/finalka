// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Проверяем, есть ли токен в localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Если токен существует, пользователь авторизован
  }, []);

  return (
    <header>
      <div className="container">
        <nav className={`header__wrap ${isMenuOpen ? 'open' : ''}`}>
          <h3 className="quo">Quo.</h3>
          <div className="menu-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/Exchange">Money Transfer</Link>
            <Link to="/Capable">Multiple Cards</Link>
            <Link to="/help">Help</Link>
            {isLoggedIn ? (
              <>
                <Link to="/profile">Profile</Link>
                <button
                  onClick={() => {
                    localStorage.removeItem('token'); // Убираем токен при выходе
                    setIsLoggedIn(false); // Меняем состояние на неавторизованного пользователя
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="hren">
                  <Link to="/login">Login</Link>
                </button>
                <button className="hren">
                  <Link to="/signup">Sign Up</Link>
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
