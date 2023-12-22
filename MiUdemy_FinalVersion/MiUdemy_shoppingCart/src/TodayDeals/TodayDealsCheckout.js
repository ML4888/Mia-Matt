import TodayDealsTitle from "./TodayDealsTitle"
import {Link} from 'react-router-dom'
import TodayDealsQuantityBtn from "./TodayDealsQuantityBtn"
import { TodayDealsCartContext } from "./TodayDealsCartContext"
import { useContext } from "react"

export default function TodayDealsCheckout() {

    let {todayDealsCartItems} = useContext(TodayDealsCartContext)
    let cartEmpty = todayDealsCartItems.length<=0 ? true : false

    let grandTotal = todayDealsCartItems.reduce((total, product)=>{
        return total += product.price*product.quantity
    },0)
    const freeMembershipPrice = 99

    return (
        <>
            <TodayDealsTitle mainTitle="YOUR SHOPPING CART" />

            {
                cartEmpty && 
                <div>
                    <div className="nothingInCart">The shopping Cart is empty<br/><br/>
                    <Link to="/">Today Deals Course Details</Link></div> :
                </div>
            }

            {
                !cartEmpty &&
                <div className="container">
                    <div className="cartSection">
                        <table className="checkoutTable">
                            <tbody>
                                {
                                    todayDealsCartItems.map(product=>(
                                        <tr key={product.id}>
                                            <td>
                                                <Link to={'/product/'+product.id}>
                                                <img src={process.env.PUBLIC_URL+'/img/'+product.image} alt={product.name}/>
                                                </Link>
                                            </td>
                                            <td>
                                                <p>NAME : {product.name}</p>
                                                <p>PRICE : £{product.price}</p>
                                                <p>DESCRIPTION  : {product.description}</p>
                                            </td>
                                            <td width="200">
                                                <TodayDealsQuantityBtn productInfo={product} />
                                            </td>
                                            <td>
                                                <div className="productSubTotal">
                                                    £{product.price*product.quantity}
                                                </div>
                                            </td>
                                        </tr>

                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="checkoutSection">
                        <div>TOTAL AMOUNT</div>
                        <div className="grandTotal">£ {grandTotal}</div>
                        {
                            grandTotal >= freeMembershipPrice ? 
                            <div className="freeMembership">✔️FREE MEMBERSHIP</div> :
                            <div className="noMembership">If you spent £{freeMembershipPrice} free membership for 1 year <br/>, have to spend £{freeMembershipPrice-grandTotal} more</div>
                        }
                        
                        <button>TOTAL PAYMENT AMOUNT</button>
                    </div>
                </div> 
            }

        </>
    )
}
