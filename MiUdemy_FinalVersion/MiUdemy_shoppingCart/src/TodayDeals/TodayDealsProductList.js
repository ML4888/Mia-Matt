import {Link} from "react-router-dom"
import React, {useState, useEffect} from "react"  //React Hook
import TodayDealsTitle from "./TodayDealsTitle"
import TodayDealsQuantityBtn from "./TodayDealsQuantityBtn"
import todayDealsProductData from "./TodayDeals.json"



export default function TodayDealsProductList() {

    let [todayDealsProductList, setProductList] = useState(todayDealsProductData)

    //useEffect hook
    useEffect(()=>{

    },[]) // <==  Dependency Array

    return (
        //React Fragment 
        <>
            <TodayDealsTitle mainTitle="ONLINE COURSE" />
            
            <div className="container">
                {
                    todayDealsProductList.map(product=>(
                        <React.Fragment key={product.id}>

                            <div className="containerItem">
                                <Link to={'/product/'+product.id}>
                                    <img src={'./img/'+ product.image} alt={product.name} />
                                </Link>

                                <div className="productName">
                                    {product.name}  - £ {product.price}  per each course
                                </div>
                
                                <TodayDealsQuantityBtn productInfo={product} />
                            </div>

                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}
