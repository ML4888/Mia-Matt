import {Link} from "react-router-dom"
import React, {useState, useEffect} from "react"  //React Hook
import Title from "./Title"
import QuantityBtn from "./QuantityBtn"
import productData from "./react-basic-product.json"



export default function ProductList() {

    let [productList, setProductList] = useState(productData)

    //useEffect hook
    useEffect(()=>{

    },[]) // <==  Dependency Array

    return (
        //React Fragment 
        <>
            <Title mainTitle="ONLINE COURSE" />
            
            <div className="container">
                {
                    productList.map(product=>(
                        <React.Fragment key={product.id}>

                            <div className="containerItem">
                                <Link to={'/product/'+product.id}>
                                    <img src={'./img/'+ product.image} alt={product.name} />
                                </Link>

                                <div className="productName">
                                    {product.name}  - £ {product.price}  per each course
                                </div>
                
                                <QuantityBtn productInfo={product} />
                            </div>

                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}
