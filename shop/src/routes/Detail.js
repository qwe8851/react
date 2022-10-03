/* eslint-disable */

import { useEffect, useState } from "react";
import{ useParams } from "react-router-dom";


function Detail(props) {

    let {id} = useParams();
    let findProduct = props.shoes.find((x)=>x.id == id);
    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setAlert(false);
        }, 2000);
    })

    return (
        <div className="container">
            {
                alert == true? <div className="alert alert-warning">2초 이내 구매 시 할인</div> : null
            }
            {count}
            <button onClick ={()=>{setCount(count+1)}}>버튼</button>
            <div className="setCount">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findProduct.title}</h4>
                    <p>{findProduct.content}</p>
                    <p>₩{findProduct.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}



export default Detail;