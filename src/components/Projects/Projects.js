import React from 'react';
import { motion } from 'framer-motion';
import projects from '../../data/projects';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each project card animation
      }
    }
  };

  return (
    <section id="projects" className={`${styles.projects} container`}>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        My React Native Projects
      </motion.h2>
      <motion.div
        className={styles.projectGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;