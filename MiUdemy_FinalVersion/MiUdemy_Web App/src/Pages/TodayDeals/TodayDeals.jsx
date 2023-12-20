
import TodayDealsProductList from './TodayDealsProductList';
import TodayDealsCheckout from './Checkout';
import {CartContext} from './CartContext'
import { useState } from 'react';
import {Link} from 'react-router-dom'


export default function TodayDeals() {

	const [cartItems, setCartItems] = useState([])
	//const {cartItems, setCartItems} = useContext(CartContext)



	return (

			<CartContext.Provider value={{cartItems,setCartItems}}>
				const {cartItems, setCartItems} = useContext(CartContext)
				

				<nav>
					<Link to="/">HOME ||</Link> 
					<Link to="/todaydeals">TODAY DEALS COURSES ||</Link> 
					<Link to="/TodayDealsCheckout"> MY SHOPPING CART</Link>
				</nav>
				<div>
					<TodayDealsProductList/>
				</div>

			</CartContext.Provider>

	);
}