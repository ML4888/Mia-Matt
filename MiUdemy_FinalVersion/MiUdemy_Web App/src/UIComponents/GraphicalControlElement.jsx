
import React from 'react'
import './GraphicalControlElement.css'
import arrow_icon from '../Images/Icons/graphicalControlElement_arrow.png'



const GraphicalControlElement = (props) => {

  let course1 = [
    {
      id: 1,
      name: "Course Name 1 (IT Software Courses)xxxxxxxxxxxx",
      category: "itSoftwareCourses",
      image: "../Images/Product_Images/course_1.png",
      new_price: 50.0,
      old_price: 80.5,
    }
  ]


  return (
    <div className='graphicalControlElement'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {course1.category} <img src={arrow_icon} alt="" /> {course1.name}
    </div>
  )
}

export default GraphicalControlElement
