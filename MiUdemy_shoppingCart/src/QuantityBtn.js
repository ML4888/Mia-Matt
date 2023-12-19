import { useContext, useState } from "react"
import { CartContext } from "./CartContext"

export default function QuantityBtn({productInfo}) {

    const {cartItems, setCartItems} = useContext(CartContext)

    //EMPTY IN SHOPPING CART
    let productIndexInCart = cartItems.findIndex((element)=>{
        return element.id === productInfo.id
    })
    //findIndex()
    //if youn can find the product in the cart , then go back to the index position: 0, 1, 2, 3.....
    //if not success to add the product in the car , the index is -1

    let [numInCart,setNumInCart] = useState(
        (productIndexInCart===-1) ? 0 : cartItems[productIndexInCart].quantity
    )

    const handleAdd = ()=>{

        if(productIndexInCart===-1)
        {
            //shopping cart is empty, add element into the cartItems array  (object)
            setCartItems(
                [{
                    id : productInfo.id,
                    name:productInfo.name,
                    image:productInfo.image,
                    price:productInfo.price,
                    description:productInfo.description,
                    quantity:1
                },
                ...cartItems]
            )
        }
        else
        {
            //check the shopping cart has the product，add +1 in quantity
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity++
            setCartItems(newCartArray)
        }

        setNumInCart(numInCart+1)
    }

    const handleSubtract = ()=>{

        if(cartItems[productIndexInCart].quantity===1)
        {
            //if only one product in the cart, remove object
            let newCartArray = [...cartItems]
            newCartArray.splice(productIndexInCart,1)
            setCartItems(newCartArray)
        }
        else
        {
            //just deduct the quantity
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity--
            setCartItems(newCartArray)
        }

        setNumInCart(numInCart-1)
    }

    return (
        <div className="addToCart">
            {
                (numInCart === 0) ?
                <span className="addToCartBtn" onClick={handleAdd}>ADD INTO CART </span> :
                <div>
                    <span className="subtractBtn" onClick={handleSubtract}>-</span>
                    {numInCart} Quantity 
                    <span className="addBtn" onClick={handleAdd}>+</span>
                </div>
            }
        </div>
    )
}
