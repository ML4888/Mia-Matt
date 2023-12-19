import React, { createContext, useState } from "react";
/* use all data from all course 
each course with id, name, image, new price and old price */
import all_course from "../Assets/all_course";


/*created one context and initalized with null,
this context is saved in course context that we are exporting 
*/
export const CourseContext =  createContext(null);

/*create course context provider,
function here we will pass the props and within this function we will
create a variable "contextValue", insert any data and functions that
will be provided in the shop context provider as a value.
we Can access these functions and values in any components
*/


const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_course.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const CourseContextProvider = (props) => {

    const [cartItems,setCartItems] = useState(getDefaultCart());
    
    
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = all_course.find((course) => course.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.new_price;
          }
        }
        return totalAmount;
      }

      const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
      }

    const contextValue = {getTotalCartItems,getTotalCartAmount,all_course,cartItems,addToCart,removeFromCart};
    return (
        <CourseContext.Provider value={contextValue}>
            {props.children}
        </CourseContext.Provider>
    )
}

export default CourseContextProvider;