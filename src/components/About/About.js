import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './about.css';

const About = () => {
  return (
    <div>
      <h1 className='about-intro'>About Me</h1>
      <div className='about-container'>
        <div className='socials'>
          <FaLinkedin size={30}/>
          <FaGithub size={30}/>
        </div>
        
        <div>Welcome to my portfolio website</div>
        <div className='skills-intro'>I specialize in front-end engineering with proficiency in JavaScript,
            HTML and CSS. I am highly skilled in working with React, including state
            management and have experience working with bootstrap to create
            responsive and visually appealing websites.
        </div>
      
      </div>
    </div>
  )
}

export default About