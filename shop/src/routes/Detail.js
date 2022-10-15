/* eslint-disable */

import { useEffect, useState, useContext } from "react"
import { Nav } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { Context1 } from './../App.js'
import { addItem } from '../store.js'
import { useDispatch } from "react-redux"



function Detail(props) {

    let {id} = useParams();
    let findProduct = props.shoes.find((x)=>x.id == id);
    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(true);
    let [tab, setTab] = useState(0);
    let {재고} = useContext(Context1);
    let dispatch = useDispatch()

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
            <button onClick ={()=>{setCount(count+1)}}>버튼</button>
            <div className="setCount">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findProduct.title}</h4>
                    <p>{findProduct.content}</p>
                    <p>₩{findProduct.price}</p>
                    <button className="btn btn-danger" onClick={()=>{
                        dispatch(addItem({id : state, name : 'Red Knit', count : 1}))
                    }}>주문하기</button>
                    <button onClick={()=>{ navigate('/cart')}}>Cart</button>
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
    )
}

function TabContent({tab}){

    let [fade, setFade] = useState('');
    
    useEffect(()=>{
        setTimeout(()=>{ setFade('end')},100)
        return()=>{
            setFade('')
        }
    }, [tab])
    
    return <div className={"start"+fade}>
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  }



export default Detail