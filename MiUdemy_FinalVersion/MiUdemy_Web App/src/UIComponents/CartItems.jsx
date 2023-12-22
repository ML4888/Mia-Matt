import React, { useContext } from 'react'
import './CartItems.css'
import { CourseContext } from '../Context/CourseContext'
import remove_icon from '../Images/Icons/cart_cross_icon.png'

const CartItems = () => {
    
  let freeMembershipPrice = 100;
  let grandTotal = 0;


    const {getTotalCartAmount,all_course,cartItems,removeFromCart} = useContext(CourseContext);
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p><u>Course Category</u></p>
        <p>Course Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_course.map((e)=>{
        if(cartItems[e.id]>0)
        {
            return <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr />
                    </div>
        }
        return null;
      })}


<div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
            </div>
        </div>
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total Amount </h3>
                    <h3>£ {getTotalCartAmount()}</h3>
                </div>
            </div>
            <div className="cartitems-membership-promobox">£ {getTotalCartAmount()}</div>
            {
                grandTotal >= freeMembershipPrice ? 
                <div className="cartitems-membership-promobox">✔️FREE MEMBERSHIP</div> :
                <div className="cartitems-membership-promobox">If you spent £{freeMembershipPrice} free membership for 1 year , have to spend £{freeMembershipPrice-grandTotal} more</div>
            }        
            <button>PROCEED TO CHECKOUT</button>
            </div>
        </div>
        </div>

    
  )
}

export default CartItems
