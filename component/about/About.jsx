import React from 'react';
import './about.css';
import life from '../../asset/life_photo.png';
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Claire</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={life} alt="about__life" />
          </div>
        </div>

        <div className="about__content">
          <p>
            Hi, this is Yun-Ting Chiou, You can call me Claire as well.
            <br />
            An iOS Developer with background in Chemical Engineering, with 1.5
            year experience as iOS engineer at a fintech in Taiwan. Recognized
            for exceptional communication skills, and a relentless pursuit of
            innovation in software development.
          </p>
        </div>
        <div className="contact__btn">
          <a href="#contact" className="btn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
