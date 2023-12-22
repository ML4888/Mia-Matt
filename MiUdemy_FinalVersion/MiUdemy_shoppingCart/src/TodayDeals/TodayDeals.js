import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TodayDealsCheckout from './TodayDealsCheckout';
import TodayDealsProductDetail from './TodayDealsProductDetail';
import TodayDealsProductList from './TodayDealsProductList';
import {TodayDealsCartContext} from './TodayDealsCartContext'
import { useState } from 'react';


export default function TodayDeals() {

	const [todayDealsCartItems, setTodayDealsCartItems] = useState([])


	return (
		<BrowserRouter>

			<TodayDealsCartContext.Provider value={{todayDealsCartItems,setTodayDealsCartItems}}>

				<nav>
					<Link to="/todaydeals">Today Deals</Link> 
					<Link to="/todaydealscheckout">MY SHOPPING CART</Link>
				</nav>

				<Routes>
					<Route path="/todaydeals" element={<TodayDealsProductList/>} />
					<Route path="/todaydealscheckout" element={<TodayDealsCheckout/>} />

					<Route path="/todaydealsproduct" element={<TodayDealsProductDetail/>}>
						<Route path=":todaydealsid" element={<TodayDealsProductDetail/>} />
					</Route>

					<Route path="*" element={<p>PAGE NOT FOUND</p>}/>
				</Routes>

			</TodayDealsCartContext.Provider>

		</BrowserRouter>
	);
}