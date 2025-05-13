import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToggleOn, setIsToggleOn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <span className="logo-text">
          <span className="mourad">Mourad</span>{' '}
          <span className="portfolio">Portfolio</span>
        </span>
      </div>

      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      {/* Top menu with NavLinks */}
      <div className={`top-menu ${isMenuOpen ? 'active' : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/Design"
          className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
          onClick={() => setIsMenuOpen(false)}
        >
          Design
        </NavLink>
        <NavLink
          to="/UX"
          className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
          onClick={() => setIsMenuOpen(false)}
        >
          UX & UI
        </NavLink>
        <NavLink
          to="/Accessibility"
          className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
          onClick={() => setIsMenuOpen(false)}
        >
          Accessibility
        </NavLink>
      </div>

      {/* Toggle Switch with Minimalistic Icons */}
      <div className="toggle-container">
  <label className="switch">
    <input
      type="checkbox"
      checked={isToggleOn}
      onChange={handleToggle}
    />
    <span className="slider">
      <span className="icon dark-icon">☾</span>
    </span>
  </label>
</div>
    </header>
  );
};

export default Header;