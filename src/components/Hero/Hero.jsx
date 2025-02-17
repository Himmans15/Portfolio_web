import React from 'react'
import styles from './Hero.module.css';
import {getImageUrl} from '../../utils';
const Hero = () => {
  return (
    <section id='Hero' className={styles.container}>
    <div className={styles.content}>
    <h1 className={styles.title}>Hi, I'm Himans bhardwaj</h1>
    <p className={styles.description}>"I'm a full-stack developer skilled in both front-end and back-end technologies. I specialize in building efficient, scalable web applications and enjoy solving complex problems along the way."</p>
    <a href='myemail@gmail.com' className={styles.contactBtn}>Contact</a>
    </div>
    <img src={getImageUrl('hero/profile.jpg')}
        alt='Hero image of me'
        className={styles.heroImg}
    />
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
