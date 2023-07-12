import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from './logo.png';
import hamburger from './hamburger_button.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/"><img src={logo}></img></Link>
          <span className="brand">COZ Shopping</span>
        </div>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={handleHamburgerClick}>
          <button className={isMenuOpen ? 'pressed' : ''}><img src={hamburger}></img></button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="menu-modal">
          <ul>
            <li className="greeting">김병현님 안녕하세요!</li>
            <li>
              <Link to="/products/list">상품리스트</Link>
            </li>
            <li>
              <Link to="/bookmark">북마크 페이지</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;