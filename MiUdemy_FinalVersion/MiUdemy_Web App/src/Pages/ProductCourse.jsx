

// import { CourseContext } from '../Context/CourseContext'
// import GraphicalControlElement from '../UIComponents/GraphicalControlElement';
// import CourseDisplay from '../UIComponents/CourseDisplay';
import CourseDesc from '../UIComponents/CourseDesc';
// import RelatedCourse from '../UIComponents/RelatedCourse';

import React from 'react'
// import React, { useContext } from 'react'
// import { useParams } from 'react-router-dom';


const ProductCourse = () => {
  // const {all_course}= useContext(CourseContext);
  // const {courseId} = useParams();
  // const course = all_course.find((e)=> e.id === Number(courseId));
  // return (
  //   <div>
  //     <GraphicalControlElement course={course}/>
  //     <CourseDisplay coures={course}/>
  //     <CourseDesc/>
  //     <RelatedCourse/>
  //   </div>
  // )


  return (
    <div>

      <CourseDesc/>

    </div>
  )
}

export default ProductCourse

