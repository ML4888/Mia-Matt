import {useParams, Link} from "react-router-dom"
import TodayDealsTitle from "./TodayDealsTitle"
import TodayDealsQuantityBtn from "./TodayDealsQuantityBtn"
import { useState,useEffect } from "react"
import todayDealsProductData from "./TodayDeals.json"

export default function TodayDealsProductDetail() {

    let params = useParams()
    let [todayDealsProductDetail,setProductDetail] = useState(todayDealsProductData[params.id-1])


    return (
        <div>
            {
                todayDealsProductDetail &&
                <div className="ProductDetail">
                    <TodayDealsTitle mainTitle={todayDealsProductDetail.name+'product details'} />

                    <table width="100%">
                        <tbody>
                        <tr>
                            <td align="right">
                                <img src={'../img/'+ todayDealsProductDetail.image} alt={todayDealsProductDetail.name} width="400" />
                            </td>
                            <td width="45%" padding="10">
                                <p>NAME : {todayDealsProductDetail.name}</p>
                                <p>PRICE : £{todayDealsProductDetail.price}</p>
                                <p>DESCRIPTION : {todayDealsProductDetail.description}</p><br/>
                                <TodayDealsQuantityBtn productInfo={todayDealsProductDetail} />
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
