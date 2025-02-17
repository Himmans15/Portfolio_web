import React from 'react';
import styles from './Contact.module.css';
import {getImageUrl } from '../../utils';
const Contact = () => {
  return (
    <footer id='#contact' className={styles.container}>
    <div className={styles.text}>
        <h2>Contact me</h2>
        <p>Feel free to reach out!</p> 
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl('contact/emailIcon.png')} alt='Email Icon' />
            <a href='mailto:himanshu@gamil.com'>Myeamail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl('contact/linkedinIcon.png')} alt='Linkedin Icon' />
            <a href='#'>Linkedin.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl('contact/githubIcon.png')} alt='Linkedin Icon' />
            <a href='#'>github.com/MyName</a>
        </li>
    </ul>
    </footer>
  )
}

export default Contact
