import React from 'react';
import './HeroSection.css';
import hand_icon from '../Images/Icons/hand_icon.png';
import arrow_icon from '../Images/Icons/arrow.png';
import hero_image from '../Images/Icons/hero_image.png';

/*
Creating a hero section in a React application 
involves structuring the component 
to display visually appealing content 
at the top of a webpage
*/
const HeroSection = () => {
    return (
        <div className='heroSection'>
        <div className="heroSection-left">
          <h2>MOST POPULAR COURSES</h2>
          <div>
              <div className="heroSection-hand-icon">
                  <p>Popular and Trending</p>
                  <img src={hand_icon} alt="" />
              </div>
              <u>"Most popular online course" has </u>
              <h3>
              <li>significant attention</li>
              <li>high enrollment rates</li>
              <li>attracts a larger audience</li>
              <li>more interest and participation from learners</li>
              </h3>
          </div>
          <div className="heroSection-latest-btn">
              <div>NEW RELEASED COURSES</div>
              <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="heroSection-right">
          <img src={hero_image} alt="" />
        </div>
      </div>

        )
    }
    
export default HeroSection