import { useContext, useState } from "react"
import { TodayDealsCartContext } from "./TodayDealsCartContext"

export default function QuantityBtn({productInfo}) {

    const {todayDealsCartItems, setTodayDealsCartItems} = useContext(TodayDealsCartContext)

    //EMPTY IN SHOPPING CART
    let productIndexInCart = todayDealsCartItems.findIndex((element)=>{
        return element.id === productInfo.id
    })
    //findIndex()
    //if youn can find the product in the cart , then go back to the index position: 0, 1, 2, 3.....
    //if not success to add the product in the car , the index is -1

    let [numInCart,setNumInCart] = useState(
        (productIndexInCart===-1) ? 0 : todayDealsCartItems[productIndexInCart].quantity
    )

    const handleAdd = ()=>{

        if(productIndexInCart===-1)
        {
            //shopping cart is empty, add element into the cartItems array  (object)
            setTodayDealsCartItems(
                [{
                    id : productInfo.id,
                    name:productInfo.name,
                    image:productInfo.image,
                    price:productInfo.price,
                    description:productInfo.description,
                    quantity:1
                },
                ...todayDealsCartItems]
            )
        }
        else
        {
            //check the shopping cart has the product，add +1 in quantity
            let newCartArray = [...todayDealsCartItems]
            newCartArray[productIndexInCart].quantity++
            setTodayDealsCartItems(newCartArray)
        }

        setNumInCart(numInCart+1)
    }

    const handleSubtract = ()=>{

        if(todayDealsCartItems[productIndexInCart].quantity===1)
        {
            //if only one product in the cart, remove object
            let newCartArray = [...todayDealsCartItems]
            newCartArray.splice(productIndexInCart,1)
            setTodayDealsCartItems(newCartArray)
        }
        else
        {
            //just deduct the quantity
            let newCartArray = [...todayDealsCartItems]
            newCartArray[productIndexInCart].quantity--
            setTodayDealsCartItems(newCartArray)
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
