import React from 'react'
import './Offers.css'
import offer_image from '../Images/Icons/offer_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      {/* Desing the HTML Structure for the offer commponents */}
      <div className="offers-left">
        <h1>Exclusive Offers<u>  For You</u></h1>
        <p>ONLY ON BEST SELLERS COURSES</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={offer_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
