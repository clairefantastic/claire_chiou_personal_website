import React from 'react';
import './skills.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';
const Skills = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Javascript</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>React JS</h4>
            </article>
          </div>
        </div>
        <div className="experience__ios">
          <h3>iOS Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Swift</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>VIPER</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>MVC/MVVM</h4>
            </article>
          </div>
        </div>
        <div className="experience__software">
          <h3>Software Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Git</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>WebRTC</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Firebase</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Swagger</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>PlantUML</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
