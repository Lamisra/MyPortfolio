import React from 'react';
import './header.css';


const Header = () => {
  return (
    <div className='header '>
      {/* My logo */}
      <h1>IsraLamrani</h1>
      
      <div className='icons'>
        {/* socialLinks */}
        <div className='socialLinks '>
          <ul>
            <li>
              <a href="https://github.com/Lamisra" target="_blank">
                <img src="src\assets\images\icon-github.svg" alt="github icon" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/isra-lamrani/" target="_blank">
                <img src="src\assets\images\icon-linkedin.svg" alt="linkedin icon" />
              </a>
            </li>
          </ul>
        </div>

        {/* light button */}
        <div className='lightButton'>
          light
        </div>
        
      </div>



    </div>
  )
}

export default Header

