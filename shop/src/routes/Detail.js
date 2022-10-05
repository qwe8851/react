/* eslint-disable */

import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import{ useParams } from "react-router-dom";


function Detail(props) {

    let {id} = useParams();
    let findProduct = props.shoes.find((x)=>x.id == id);
    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(true);
    let [tab, setTab] = useState(0);

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
            
            {/* tab UI */}
            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(2)}} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            
            {/* 컴포넌트 사용 */}
            <TabContent tab={tab} />
        </div>
    );
}

function TabContent({tab}){
    console.log({tab});
    return [ <div>내용0</div>, <div>내용1</div>, <div>내용2</div>][{tab}.tab]
    // 왜 tab.tab으로 해야 들어가는지는 좀 더 해봐야 할 듯 하다 .. 10/05
  }



export default Detail;