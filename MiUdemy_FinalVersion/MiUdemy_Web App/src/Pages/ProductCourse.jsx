

import { CourseContext } from '../Context/CourseContext'
import GraphicalControlElement from '../UIComponents/GraphicalControlElement';
import CourseDisplay from '../UIComponents/CourseDisplay';
import CourseDesc from '../UIComponents/CourseDesc';
import RelatedCourse from '../UIComponents/RelatedCourse';

import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
/* stringify() method is used to convert an object to a string. */


const ProductCourse = () => {
  const {all_course}= useContext(CourseContext);
  const {courseId} = useParams();
  console.log ("sdfsdfas")
  console.log (Number(courseId))
    

  const course = all_course.find((e)=> e.id === Number(courseId));
  
  return (
    <div>
      <GraphicalControlElement course={course}/>
      <CourseDisplay course={course}/> 
      <CourseDesc/>
      <RelatedCourse/> 
    </div>
  )
}

export default ProductCourse

