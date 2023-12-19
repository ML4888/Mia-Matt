import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

import logo from '../Images/Icons/logo.png'
import cart_icon from '../Images/Icons/cart_icon.png'



    const Navbar = () => {
        /*identify for selected menu from the menu bar
        */
        const [menu,setMenu] = useState("developmentCourses");

        return (
            /*
            Create the HTML structure of the Navbar
            */
            <div className='navbar'>
                <div className="nav-logo">
                <img src={logo} alt="" />
                <p>MiUdemy</p>
                </div>
                {/* 
                Add the course list items, add lii, add four list items
                 */}
                <ul className="nav-menu">
                    <li onClick={()=>{setMenu("developmentCourses")}}><Link style={{ textDecoration: 'none' }} to='/'>Development Courses</Link>{menu==="developmentCourses"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("itSoftwareCourses")}}><Link style={{ textDecoration: 'none' }} to='/itSoftwareCourses'>IT & Software Courses</Link>{menu==="itSoftwareCourses"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("designCourses")}}><Link style={{ textDecoration: 'none' }} to='/designCourses'>Design Courses</Link>{menu==="designCourses"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("businessCourse")}}><Link style={{ textDecoration: 'none' }} to='/businessCourse'>Business Course</Link>{menu==="businessCourse"?<hr/>:<></>}</li>
               </ul>
               <div className="nav-login-cart">
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                </div>
            </div>

        )
    }

export default Navbar