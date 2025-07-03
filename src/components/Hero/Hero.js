import React from 'react';
import { motion } from 'framer-motion'; // For animations
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={`${styles.hero} container`}>
      <div className={styles.heroContent}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className={styles.name}>Akshay Ghodasara</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A Passionate React Native Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Building intuitive, high-performance, and beautiful cross-platform mobile applications.
        </motion.p>
        <motion.div
          className={styles.ctaButtons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#projects" className={styles.buttonPrimary}>
            View My Work
          </a>
          <a href="#contact" className={styles.buttonSecondary}>
            Get in Touch
          </a>
        </motion.div>
      </div>
      <motion.div
        className={styles.heroImage}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {/* Replace with your professional photo or a relevant illustration */}
        <img src="/assets/your-photo.jpg" alt="Your Name" />
      </motion.div>
    </section>
  );
};

export default Hero;