import React from 'react';
import './Hero.css';
import profileImg from '@assets/images/owais.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '@assets/files/Owais Resume.pdf';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profileImg} alt="" />
      <h1>
        <span>I am Owais Ansari,</span> fullstack developer based in India.
      </h1>
      <p>
        A web developer with expertise in JavaScript, React, Node.js, and MERN
        stack. I specialize in building dynamic, scalable web applications and
        crafting efficient APIs to meet modern business needs.
      </p>
      <div className="hero-action">
        <AnchorLink className="anchor-link" href="#contact">
          <div className="hero-connect">Connect With Me</div>
        </AnchorLink>
        <div className="hero-resume">
          <a href={resume} download="Owais_Resume.pdf">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
