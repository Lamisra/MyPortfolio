import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className='hero ' id='Hero'>

      {/* my header */}

      <div className='header ' >
        {/* My logo */}
        <h1 className='logo'>IsraLamrani</h1>

        <div className='icons '>
          {/* socialLinks */}
          <div className='socialLinks '>
            <ul>
              <li>
                <a href="https://github.com/Lamisra" target="_blank">
                  <img src="/images/icon-github.svg" alt="GitHub icon" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/isra-lamrani/" target="_blank">
                 <img src="/images/icon-linkedin.svg" alt="LinkedIn icon" />
                </a>
              </li>
            </ul>
          </div>

          {/* light button */}
          {/* <div className='lightButton '>
            
          </div> */}

        </div>



      </div>


      {/* my main page */}
<img className='profilePicture' src="/images/profile-pic.png" alt="Profile" />
      <h2 className='xl'>
        Nice to meet you! <br />
        I'm <span>Isra Lamrani</span>.
      </h2>

      <p className='p'>
        Based in Montreal, I'm a front-end developer<br />
        passionate about building accessible web apps
        that users love.
      </p>

      <a className='button' href='#contact'>CONTACT ME</a>

      <div className='circle' >

      </div>





      


    </div>
  )
}

export default Hero;
