import React from 'react'
import './RelatedCourse.css'
import data_course from '../Assets/data'
import CourseItem from './CourseItem'

const RelatedCourse = () => {
  return (
    <div className='relatedcourse'>
      <h1>Related Courses</h1>
      <hr />
      <div className="relatedcourse-item">
        {data_course.map((courseItem,i)=>{
            return <CourseItem key={i} id={courseItem.id} name={courseItem.name} image={courseItem.image} new_price={courseItem.new_price} old_price={courseItem.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedCourse
