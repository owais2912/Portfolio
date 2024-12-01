import React from 'react'
import './About.css';
import theme_pattern from '@assets/theme_pattern.svg';
import about_profile from '@assets/images/owais_about.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={about_profile} alt=""/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Dynamic web developer with over 2 years of experience in full-stack development, specializing in the MERN stack and Laravel. Proficient in database management with PostgreSQL and MySQL, as well as front-end technologies like HTML, CSS, and JavaScript.</p>
                    <p>Experienced in Python for scripting and automation tasks. Passionate about building robust and user-friendly web applications and eager to contribute in a collaborative environment.</p>
                </div>
                <div className="about-skills">
                    <div className="skill"><p>HTML & CSS</p><hr style={{width:"75%"}}/></div>
                    <div className="skill"><p>Python</p><hr style={{width:"50%"}}/></div>
                    <div className="skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                    <div className="skill"><p>Javascript</p><hr style={{width:"65%"}}/></div>
                    <div className="skill"><p>PostgreSQL</p><hr style={{width:"80%"}}/></div>
                    <div className="skill"><p>Node JS</p><hr 
                    style={{width:"60%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        </div>
    </div>
  )
}

export default About