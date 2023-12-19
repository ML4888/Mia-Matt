import {useParams, Link} from "react-router-dom"
import Title from "./Title"
import QuantityBtn from "./QuantityBtn"
import { useState,useEffect } from "react"
import productDate from "./react-basic-product.json"

export default function ProductDetail() {

    let params = useParams()
    let [productDetail,setProductDetail] = useState(productDate[params.id-1])


    return (
        <div>
            {
                productDetail &&
                <div className="ProductDetail">
                    <Title mainTitle={productDetail.name+'product details'} />

                    <table width="100%">
                        <tbody>
                        <tr>
                            <td align="right">
                                <img src={'../img/'+ productDetail.image} alt={productDetail.name} width="400" />
                            </td>
                            <td width="45%" padding="10">
                                <p>NAME : {productDetail.name}</p>
                                <p>PRICE : £{productDetail.price}</p>
                                <p>DESCRIPTION : {productDetail.description}</p><br/>
                                <QuantityBtn productInfo={productDetail} />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            }
        
            <Link to="/" >
                <div className="backToGoodsListBtn">↩️ BACK TO PRODUCT LIST</div>
            </Link>
        </div>
    )
}
