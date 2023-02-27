import React from 'react';
import styles from './Slide.module.css';
import slide from '../../assets/introImg.jpg';

const SlideHome = () => {
  return (
    <div className={styles.slide}>
      <img src={slide} alt="" />
    </div>
  );
};

export default SlideHome;
