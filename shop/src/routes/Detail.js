/* eslint-disable */

import { useEffect, useState } from "react";
import{ useParams } from "react-router-dom";
import styled from 'styled-components';

let Box = styled.div`
    padding : 20px;
    color : grey;
`;

let YellowBtn = styled.button`
  background : ${ props => props.bg };
  color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding : 10px;
`;

function Detail(props) {

    return(
        <Box>
            <YellowBtn bg="orange">버튼</YellowBtn>
            <YellowBtn bg="blue">버튼</YellowBtn>
        </Box>
    )
    useEffect(()=>{
        console.log('안녕');
    })

    let {id} = useParams();
    let findProduct = props.shoes.find((x)=>x.id == id);
    let [count, setCount] = useState(0);

    return (
        <div className="container">
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