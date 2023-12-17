import React from 'react'
import './NewCourse.css'
import new_course from '../Assets/new_course'
import CourseItem from './CourseItem'

const NewCourse = () => {
  return (
    <div className='new-course'>
      <h1>NEW COURSES</h1>
      <hr />
      <div className="courses">
        {new_course.map((courseItem,i)=>{
            return <CourseItem key={i} id={courseItem.id} name={courseItem.name} image={courseItem.image} new_price={courseItem.new_price} old_price={courseItem.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCourse