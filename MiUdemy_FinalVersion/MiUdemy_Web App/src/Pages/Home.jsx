import React from 'react';
import HeroSection from '../UIComponents/HeroSection';
import PopularCourse from '../UIComponents/PopularCourse';
import Offers from '../UIComponents/Offers';
import NewCourse from '../UIComponents/NewCourse';
import NewsLetter from '../UIComponents/NewsLetter';

const Home = () => {
  return (
    <div >
      <HeroSection/>
      <PopularCourse/>
       <Offers/> 
      <NewCourse/>
      <NewsLetter/>
    </div>
  )
}

export default Home
