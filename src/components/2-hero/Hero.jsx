import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className='hero border'>

    <div className='leftSide border'>
    <h2>
      Nice to meet you! <br/>
      I'm <span>Isra Lamrani</span>.
    </h2>

    <p>
      Based in Montreal,I'm a front-end developer
      passionate about building accessible web apps
       that users love.
    </p>

    <a href=''>CONTACT ME</a>
    </div>

    <div className='rightSide border'>

    <img src='../src/assets/images/profile-pic.png' alt='profile picture'/>

    </div>

    </div>
  )
}

export default Hero;