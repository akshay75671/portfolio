import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <p>&copy; {new Date().getFullYear()} Akshay Ghodasara. All rights reserved.</p>
        <div className={styles.socialLinks}>
          {/* <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a> */}
          <a href="https://www.linkedin.com/in/akshay-ghodasara-5878a0165/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:akshaypatel75671@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;