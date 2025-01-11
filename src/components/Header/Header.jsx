// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="header__wrap">
          <h3 className="quo">Quo.</h3>
          <Link to="/">Home</Link>
          <Link to="/login">Money Transfer</Link>
          <Link to="/signup">Multi Currency</Link>
          <Link to="/help">Help</Link>
          <button className="hren">
            <Link to="/login">Login</Link>
          </button>
          <button className="hren">
            <Link to="/signup">Sign Up</Link>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
