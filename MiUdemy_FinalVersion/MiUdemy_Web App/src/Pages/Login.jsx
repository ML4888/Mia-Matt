import React from 'react'
import './Login.css'


const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder='User Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>CONTINUE</button>
        <p className="login-login">Already have an account? <span>LOGIN HERE</span></p>
        <div className="login-agree">
          <input type="checkbox" name='' id='' />
          <p>I agree to the terms of use & privacy policy @ MiUdemy.com.uk</p>
        </div>
      </div>
    </div>
  )
}

export default Login