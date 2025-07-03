import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // 'success', 'error', 'sending', ''

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace with your EmailJS Service ID, Template ID, and User ID
    emailjs.send(
      'service_50ko375',
      'template_mstlmuc',
      formData,
      'TY6kN0AwKuAL8zC30'
    )
    .then((result) => {
      console.log(result.text);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    }, (error) => {
      console.log(error.text);
      setStatus('error');
    });
  };

  return (
    <section id="contact" className={`${styles.contact} container`}>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h2>

      <div className={styles.contactContent}>
        <motion.div
          className={styles.contactInfo}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3>Let's connect!</h3>
          <p>
            Whether you have a project idea, a job opportunity, or just want to say hi,
            feel free to reach out. I'm always open to new collaborations and discussions.
          </p>
          <ul className={styles.infoList}>
            <li>
              <FaEnvelope /> <a href="mailto:akshaypatel75671@gmail.com">akshaypatel75671@gmail.com</a>
            </li>
            <li>
              <FaPhoneAlt /> <a href="tel:+917046057408">+91 70460 57408</a> {/* Replace with your number */}
            </li>
            <li>
              <FaLinkedin /> <a href="https://www.linkedin.com/in/akshay-ghodasara-5878a0165" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            </li>
            {/* <li>
              <FaGithub /> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            </li> */}
          </ul>
        </motion.div>

        <motion.form
          className={styles.contactForm}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3>Send a Message</h3>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton} disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <p className={styles.successMessage}>Message sent successfully!</p>}
          {status === 'error' && <p className={styles.errorMessage}>Failed to send message. Please try again later.</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;