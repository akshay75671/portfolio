import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLink, FaExpand, FaCompress } from 'react-icons/fa';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.div
      className={styles.card}
      variants={itemVariants}
      whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
    >
      {/* <div className={styles.mediaContainer}>
        {project.gif ? (
          <img src={project.gif} alt={`${project.name} Demo`} className={styles.projectMedia} />
        ) : (
          <img src={project.image} alt={`${project.name} Screenshot`} className={styles.projectMedia} />
        )}
      </div> */}

      <div className={styles.cardContent}>
        <h3>{project.name}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.techStack}>
          {project.techStack.map((tech, index) => (
            <span key={index} className={styles.techTag}>{tech}</span>
          ))}
        </div>

        <button onClick={toggleDetails} className={styles.toggleButton}>
          {showDetails ? <><FaCompress /> Show Less</> : <><FaExpand /> Show More</>}
        </button>

        {showDetails && (
          <motion.div
            className={styles.details}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.features && (
              <>
                <h4>Key Features:</h4>
                <ul className={styles.featureList}>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
            {project.challenges && (
              <>
                <h4>Challenges & Solutions:</h4>
                <p>{project.challenges}</p>
              </>
            )}
          </motion.div>
        )}

        {/* <div className={styles.links}>
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FaGithub /> GitHub
            </a>
          )}
          {project.liveDemoLink && (
            <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FaLink /> Live Demo
            </a>
          )}
        </div> */}
      </div>
    </motion.div>
  );
};

export default ProjectCard;