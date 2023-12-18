import './CourseItem.css'

import React from 'react'
import { Link } from 'react-router-dom'


const CourseItem = (props) => {
  return (
    <div className='courseItem'>
      <Link to={`/ProductCourse/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <p>{props.name}</p>
      <div className="courseItem-prices">
        <div className="courseItem-Newprice">
            £{props.new_price}
        </div>
        <div className="courseItem-Oldprice">
            £{props.old_price}
        </div>
      </div>
    </div>
  )
}

export default CourseItem
