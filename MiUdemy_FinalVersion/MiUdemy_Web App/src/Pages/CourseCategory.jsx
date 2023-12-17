import React, { useContext } from 'react'
import './CourseCategory.css'
import { CourseContext } from '../Context/CourseContext'
import dropdown_icon from '../Images/Icons/dropdown_icon.png'
import CourseItem from '../UIComponents/CourseItem'

const CourseCategory = (props) => {
  /* insert the all courses data  using context */
  const {all_course} = useContext(CourseContext);
  return (
    <div className='courseCategory'>
      <img className='courseCategory-banner' src={props.banner} alt="" />
      <div className="courseCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="courseCategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
       <div className="courseCategory-products">
        {all_course.map((courseItem,i)=>{

          if (props.category===courseItem.category) {
            return <CourseItem key={i} id={courseItem.id} name={courseItem.name} image={courseItem.image} new_price={courseItem.new_price} old_price={courseItem.old_price}/>
          }
          else{
            return null;
          }
        })}
        </div> 
        
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
  
}

export default CourseCategory