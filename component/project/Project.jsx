import React from "react";
import './project.css'
import demo from "../../asset/claire_demo.gif"
import { BsFillPatchCheckFill } from "react-icons/bs";

const Project = () => {
   return(
    <section id="project">
      <h5>Side Projects</h5>
      <h2>Lightening</h2>
      <div className="project__container">
         <div className="demo__gif__img">
         <img src={demo} alt="demo_gif"/>
         </div>
      
      <div className="project__content">
         <p>Lightening is a sound-based app that connect the visually impaired and volunteers by live video calls and audio-sharing.
            <br/>
            Without backend server support for signalling server, I utilized Firebase as a signaling server due to its real-time database capabilities to facilitate WebRTC framework.
            <br/>
            If you would like to know more information, please be free to visit my
             <a href="https://github.com/clairefantastic/Lightening"> Github</a>
         </p>
         <div className="skills__tag">
         <article className="skills__detail">
            <h4>Swift</h4>
         </article>
         <article className="skills__detail">
            <h4>Firebase</h4>
         </article>
         <article className="skills__detail">
            <h4>WebRTC</h4>
         </article>
         <article className="skills__detail">
            <h4>MVC</h4>
         </article>
         </div>
      </div>    
</div>
    </section>
   ) 
}

export default Project