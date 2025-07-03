import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        {/* <Link to="/" className={styles.logo} onClick={closeMenu}>
          AKSHAY GHODASARA
        </Link> */}
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <img src="/assets/akshay-logo.png" alt="Akshay Logo" className={styles.logoImage} />
        </Link>
        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <ul>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;