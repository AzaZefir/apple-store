import React from 'react';
import aboutSvg from '../../../assets/img/about/iPhoneBg.svg';
import scss from './About.module.scss';

export const About = () => {
  return (
    <section className={`${scss.about} container d-flex align-items-center`}>
      <div className={`${scss.title} d-flex align-items-center justify-content-center`}>
        <h2>Аксессуары для Iphone 13 Pro Max</h2>
      </div>
      <div>
        <img src={aboutSvg} alt="Картинка Iphone" />
      </div>
    </section>
  );
};
