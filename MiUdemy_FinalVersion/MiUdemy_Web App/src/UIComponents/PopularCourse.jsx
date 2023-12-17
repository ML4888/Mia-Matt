import './PopularCourse.css'

import React from 'react'
import data_course from '../Assets/data';
import CourseItem from './CourseItem';
/*
use courseData.js file for course
we have the course ID, name, image, new price and old price
*/
const PopularCourse = () => {
  return (
    <div className='popularCourse'>
      <h1>NEW AND POPULAR COURSES</h1>
      {/* the <hr> tag in HTML is like a digital ruler 
      or a horizontal line that you can place on a web page to visually separate content. */}
      <hr />
      <div className="popularCourse-item">
        {/* Render our item component using data product 
        map the course data and
        pass the props by key , provide i in the key 
        add the id in the prop, the id become courseItem.id
        provide the courseName in the props, become courseItem.name 
        image, old price and new price.... with same logic*/}
        {data_course.map((courseItem,i)=>{
            return <CourseItem key={i} id={courseItem.id} name={courseItem.name} image={courseItem.image} new_price={courseItem.new_price} old_price={courseItem.old_price}/>
        })}
      </div>
    </div>
  )
}

export default PopularCourse
