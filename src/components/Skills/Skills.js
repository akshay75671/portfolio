import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../../data/skills';
import styles from './Skills.module.css';

const Skills = () => {
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
    <section id="skills" className={`${styles.skills} container`}>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <div className={styles.skillCategories}>
        {Object.keys(skillsData).map((categoryKey) => (
          <motion.div
            key={categoryKey}
            className={styles.skillCategoryCard}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>{categoryKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h3>
            <ul className={styles.skillList}>
              {skillsData[categoryKey].map((skill, index) => (
                <motion.li key={index} variants={itemVariants}>
                  {skill.name} <span className={styles.skillLevel}>({skill.level})</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;