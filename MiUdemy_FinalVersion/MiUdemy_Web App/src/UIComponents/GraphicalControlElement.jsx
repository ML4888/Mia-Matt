import React from 'react'
import './GraphicalControlElement.css'
import graphicalControlElement_arrow_icon from '../Images/Icons/graphicalControlElement_arrow.png'

const GraphicalControlElement = (props) => {
    const {course} = props;
  return (
    <div className='graphicalControlElement'>
      HOME <img src={graphicalControlElement_arrow_icon} alt="" /> ALL COURSES <img src={graphicalControlElement_arrow_icon} alt="" /> {course.category} <img src={graphicalControlElement_arrow_icon} alt="" /> {course.name}
    </div>
  )
}

export default GraphicalControlElement
