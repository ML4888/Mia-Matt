import React from 'react'
import './CourseDesc.css'

const CourseDesc = () => {
  return (
    <div className='courseDesc'>
      <div className="courseDesc-navigator">
        <div className="courseDesc-nav-box">Description</div>
        <div className="courseDesc-nav-box fade">Reviews (122)</div>
      </div>
      <div className="courseDesc-description">
        <p>An online course is a program of learning that's organized 
            according to a syllabus <u> usually in units</u>
            and that takes place in a virtual space. 
            Online courses can be informal and focused on one skill 
            or as formal as leading to a certification or degree</p>
          <p>
          Asynchronous Online Classes — 
          <u>Over 20 of GOA's most popular semester courses</u> in an intensive 
          7-week summer format. Explore a passion during the summer months, 
          as well as advance in your coursework. 
          Sign Up For Mailing List. View Course Catalog
          </p>
      </div>
    </div>
  )
}

export default CourseDesc
