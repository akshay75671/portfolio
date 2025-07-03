import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className={`${styles.about} container`}>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.div
        className={styles.aboutContent}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={itemVariants}>
          Hello! I'm Akshay Ghodasara, a dedicated React Native developer based in Junagadh, Gujarat, India. With 6+ years of experience, I specialize in crafting high-performance, user-friendly, and visually appealing mobile applications for both iOS and Android platforms.
        </motion.p>
        <motion.p variants={itemVariants}>
          My journey in mobile development started with a fascination for how technology can seamlessly integrate into daily life. I love bringing ideas to life, from conceptualization to deployment on app stores, focusing on clean code, robust architecture, and exceptional user experience.
        </motion.p>
        <motion.p variants={itemVariants}>
          I have a strong command of JavaScript, React, and of course, React Native. I'm proficient in state management libraries like Redux, navigation with React Navigation, and integrating various third-party APIs (e.g., Firebase, payment gateways, mapping services). I'm always eager to learn new technologies and continuously improve my skills to deliver cutting-edge solutions.
        </motion.p>
        <motion.p variants={itemVariants}>
          When I'm not coding, you can find me exploring new hiking trails, reading tech blogs, or experimenting with smart home devices. I believe in a balanced life and enjoy both the challenges of development and the joys of personal pursuits.
        </motion.p>
        <motion.div variants={itemVariants} className={styles.resumeButtonContainer}>
          <a href="/assets/Akshay-resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeButton}>
            Download My Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;