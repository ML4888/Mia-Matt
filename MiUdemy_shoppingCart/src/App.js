import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import {CartContext} from './CartContext'
import { useState } from 'react';

function App() {

	const [cartItems, setCartItems] = useState([])
	console.log (cartItems.length)


  return (
    <BrowserRouter>

		<CartContext.Provider value={{cartItems,setCartItems}}>

			<nav>
				<Link to="/">HOME</Link> 
				<Link to="/checkout">MY SHOPPING CART</Link>
			</nav>

			<Routes>
				<Route path="/" element={<ProductList/>} />
				<Route path="/checkout" element={<Checkout/>} />

				<Route path="/product" element={<ProductDetail/>}>
					<Route path=":id" element={<ProductDetail/>} />
				</Route>

				<Route path="*" element={<p>PAGE NOT FOUND</p>}/>
			</Routes>

		</CartContext.Provider>

	</BrowserRouter>
  );
}

export default App;