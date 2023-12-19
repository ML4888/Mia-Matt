


import React, { useContext } from 'react'
import './CourseDisplay.css'
import star_icon from "../Images/Icons/star_icon.png";
import star_dull_icon from "../Images/Icons/star_dull_icon.png";
import { CourseContext } from '../Context/CourseContext';

const CourseDisplay = (props) => {



    const {course} = props;
    const {addToCart} = useContext(CourseContext);

    const course1 = [
      {
        id: 1,
        name: "Course Name 1 (IT Software Courses)xxxxxxxxxxxx",
        category: "itSoftwareCourses",
        image: "../Images/Product_Images/course_1.png",
        new_price: 50.0,
        old_price: 80.5,
      }
    ]

  
    let courseName = "React"
    let newPrice = 50.0
    let oldPrice = 80.5
    

  return (
    <div className='coursedisplay'>
      <div className="coursedisplay-left">
        <div className="coursedisplay-img-list">
            <img src="../Images/Product_Images/course_min1.png" alt="" />
            <img src="../Images/Product_Images/course_min2.png" alt="" />
            <img src="../Images/Product_Images/course_min3.png" alt="" />
            <img src="../Images/Product_Images/course_min4.png" alt="" />

        </div>
        <div className="coursedisplay-img">
            <img className='coursedisplay-main-img' src="../Images/Product_Images/course_1.png" alt="" />

        </div>
      </div>
      <div className="coursedisplay-right">
        <h1>"{courseName}"</h1>
        <div className="coursedisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="coursedisplay-right-prices">
            <div className="coursedisplay-right-price-old">£{oldPrice}</div>
            <div className="producoursedisplayctdisplay-right-price-new">£{newPrice}</div>
        </div>
        <div className="coursedisplay-right-description">
        <u>The React. </u>
        JS Course Curriculum contains basic elements like introduction, 
        JSX overview, Environmental setup, real-time applications, 
        forms and UI, Component Lifecycle, Event Handling, 
        and Styles along with advanced features 
        such as router and navigations, Flux, Redux, 
        and Unit testing methods.
        </div>
        <div className="coursedisplay-right-size">
            <h1>Ratings</h1>
            <div className="coursedisplay-right-sizes">
                <div> Star: * * * * 4/5</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(course1)}}>ADD TO CART</button>
        <p className='coursedisplay-right-category'><span>Category :</span>IT & Software Courses, React, Beginner </p>
        <p className='coursedisplay-right-category'><span>Contents :</span>React Hook: UseState, UseEffect, UseContext</p>
      </div>
    </div>
  )
}

export default CourseDisplay