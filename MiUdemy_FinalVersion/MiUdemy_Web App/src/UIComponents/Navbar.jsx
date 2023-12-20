import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

import logo from '../Images/Icons/logo.png'
import cart_icon from '../Images/Icons/cart_icon.png'
import user_icon from '../Images/Icons/user_icon.png'



    const Navbar = () => {
        /*identify for selected menu from the menu bar
        */
        const [menu,setMenu] = useState("home");

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
                <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("todayDeals")}}><Link style={{ textDecoration: 'none' }} to='/todayDeals'>Today Deals</Link>{menu==="todayDeals"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("itSoftwareCourses")}}><Link style={{ textDecoration: 'none' }} to='/itSoftwareCourses'>IT & Software Courses</Link>{menu==="itSoftwareCourses"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("designCourses")}}><Link style={{ textDecoration: 'none' }} to='/designCourses'>Design Courses</Link>{menu==="designCourses"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("businessCourse")}}><Link style={{ textDecoration: 'none' }} to='/businessCourse'>Business Course</Link>{menu==="businessCourse"?<hr/>:<></>}</li>
               </ul>
               <div className="nav-login-cart">
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                    <Link to='/user'><img src={user_icon} alt="" /></Link>
                </div>
            </div>

        )
    }

export default Navbar