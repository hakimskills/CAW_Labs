import React, { useState } from 'react';
import './Skill.css';
import reactLogo from '../images/react.png';
import vueLogo from '../images/vue.png';
import flutterLogo from '../images/flutter.png';
import firebaseLogo from '../images/firebase.png';
import laravelLogo from '../images/laravel.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Skill = ({onNavClick}) => {
  const handleSeeProjectsClick = () => {
    onNavClick('projects');
  };

  return (
    <div className='skill'>
      <h1>Skills and Experience.</h1>
      <div className="container">
        <div className="left-panel">
          <h2>Experience:</h2>
          As a passionate League of Legends player, I embarked on a
           project to create a
           React-based website dedicated to Riot Games. This journey not only
            aimed to showcase my love for the game but also provide a
             dynamic platform for the League community.<br></br>

          -In my e-learning project, I skillfully employed Vue.js for dynamic interfaces, Node.js for robust backend development, and Git/GitHub for version control. Cloudinary facilitated seamless image storage, while Vimeo hosted videos for optimal content delivery. This project enhanced my proficiency in front-end and back-end technologies, version control, and cloud-based solutions, equipping me with valuable skills for creating effective e-learning platforms.
             <a href='# n ' onClick={handleSeeProjectsClick} className='redirect'> See projects  <FontAwesomeIcon icon={faArrowRight} /></a>
             
        </div>
        <div className="bar"></div>
        <div className="right-panel">
          <h2>Skills:</h2>
          <div className="frontend">
            <div className="skill-list">
              <div className="skill-logo">React <img src={reactLogo} alt="React Logo" /></div>
              <div className="skill-logo">Vue.js <img src={vueLogo} alt="Vue.js Logo" /></div>
              <div className="skill-logo">Flutter(Mobile) <img src={flutterLogo} alt="Flutter Logo" /></div>
            </div>
          </div>
          <div className="backend">
            <div className="skill-list">
              <div className="skill-logo">Firebase <img src={firebaseLogo} alt="Firebase Logo" /></div>
              <div className="skill-logo">Laravel <img src={laravelLogo} alt="Laravel Logo" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
